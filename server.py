import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib import error, request


BASE_DIR = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "8000"))
OPENAI_API_URL = "https://api.openai.com/v1/responses"


def extract_output_text(response_json: dict) -> str:
    texts = []

    for item in response_json.get("output", []):
        if item.get("type") != "message":
            continue

        for part in item.get("content", []):
            if part.get("type") == "output_text":
                texts.append(part.get("text", ""))

    return "".join(texts).strip()


def extract_json_block(text: str) -> dict:
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        start = text.find("{")
        end = text.rfind("}")

        if start == -1 or end == -1 or end <= start:
            raise

        return json.loads(text[start : end + 1])


def build_openai_prompt(payload: dict) -> tuple[str, str]:
    local_question = payload.get("localQuestion", {})
    metrics = payload.get("metrics", {})
    tarot = payload.get("tarot", {})
    hexagram = payload.get("hexagram", {})

    instructions = (
        "你是一个中文占卜网站里的 AI 解读师。"
        "你只能基于用户提供的固定命盘事实进行解读，不能改动任何分数、塔罗牌、卦象、幸运项，"
        "也不能编造新的占卜依据。"
        "请输出且仅输出一个合法 JSON 对象，不要输出 markdown、不要加代码块。"
        "JSON 必须包含这些字段："
        "summary, context, questionTitle, verdict, reason, relevantTitle, relevantText, "
        "basisTitle, basisText, prepTitle, prepText, encourageTitle, encourageText, guidance, action。"
        "要求："
        "1. 使用简体中文；"
        "2. 语气温柔、具体、有一点仪式感，但不要悬浮；"
        "3. 如果用户在问是否适合做某件事，要给出清晰态度，偏向“适合推进 / 适合先铺垫 / 暂不宜推进”之一；"
        "4. verdict 是一句明确回答；"
        "5. reason 需要点明总运、主参考维度、塔罗、卦象为什么支持这个判断；"
        "6. relevantTitle 要写成“主参考：感情位”这种，不要和 basisTitle 重复；"
        "7. basisTitle 才写具体分数，如“感情位 79 分”；"
        "8. context 需要明确说明“基础命盘分数未改动，本段是 AI 结合命盘做的深度解读”；"
        "9. 各字段尽量适合网页卡片阅读，避免过长。"
    )

    user_input = {
        "nickname": payload.get("nickname", "你"),
        "birthdate": payload.get("birthdate"),
        "zodiac": payload.get("zodiac"),
        "targetDate": payload.get("targetDate"),
        "question": payload.get("question"),
        "totalScore": payload.get("totalScore"),
        "title": payload.get("title"),
        "summary": payload.get("summary"),
        "context": payload.get("context"),
        "dailyAction": payload.get("dailyAction"),
        "guidance": payload.get("guidance"),
        "luckyColor": payload.get("luckyColor"),
        "luckyNumber": payload.get("luckyNumber"),
        "luckyDirection": payload.get("luckyDirection"),
        "metrics": {
            "career": metrics.get("career"),
            "love": metrics.get("love"),
            "wealth": metrics.get("wealth"),
            "energy": metrics.get("energy"),
        },
        "tarot": tarot,
        "hexagram": hexagram,
        "localQuestion": {
            "questionTitle": local_question.get("questionTitle"),
            "verdict": local_question.get("verdict"),
            "reason": local_question.get("reason"),
            "relevantTitle": local_question.get("relevantTitle"),
            "relevantText": local_question.get("relevantText"),
            "basisTitle": local_question.get("basisTitle"),
            "basisText": local_question.get("basisText"),
            "prepTitle": local_question.get("prepTitle"),
            "prepText": local_question.get("prepText"),
            "encourageTitle": local_question.get("encourageTitle"),
            "encourageText": local_question.get("encourageText"),
        },
    }

    return instructions, json.dumps(user_input, ensure_ascii=False, indent=2)


def interpret_with_openai(payload: dict) -> dict:
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("missing_openai_api_key")

    model = os.environ.get("OPENAI_MODEL", "gpt-5.4")
    reasoning_effort = os.environ.get(
        "OPENAI_REASONING_EFFORT",
        "high" if model.endswith("-pro") else "medium",
    )
    instructions, user_input = build_openai_prompt(payload)

    body = {
        "model": model,
        "instructions": instructions,
        "input": [
            {
                "role": "user",
                "content": [{"type": "input_text", "text": user_input}],
            }
        ],
        "reasoning": {"effort": reasoning_effort},
        "text": {"verbosity": "medium"},
        "max_output_tokens": 1200,
        "store": False,
    }

    api_request = request.Request(
        OPENAI_API_URL,
        data=json.dumps(body).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    with request.urlopen(api_request, timeout=90) as response:
        response_json = json.loads(response.read().decode("utf-8"))

    output_text = extract_output_text(response_json)
    parsed = extract_json_block(output_text)
    return {"model": model, "answer": parsed}


class DivinationHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def send_json(self, status_code: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self) -> None:
        if self.path != "/api/interpret":
            self.send_json(404, {"ok": False, "message": "Not found"})
            return

        content_length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_length)

        try:
            payload = json.loads(raw_body.decode("utf-8"))
        except json.JSONDecodeError:
            self.send_json(400, {"ok": False, "message": "Invalid JSON payload"})
            return

        try:
            result = interpret_with_openai(payload)
        except RuntimeError as exc:
            if str(exc) == "missing_openai_api_key":
                self.send_json(
                    503,
                    {
                        "ok": False,
                        "message": "服务端还没有配置 OPENAI_API_KEY，当前只能使用本地规则解读。",
                    },
                )
                return

            self.send_json(500, {"ok": False, "message": str(exc)})
            return
        except error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="ignore")
            self.send_json(
                502,
                {
                    "ok": False,
                    "message": "调用 OpenAI 接口时失败了，已自动保留本地规则解读。",
                    "detail": detail[:1200],
                },
            )
            return
        except Exception as exc:  # noqa: BLE001
            self.send_json(
                500,
                {
                    "ok": False,
                    "message": "AI 深度解读暂时没有成功，页面会继续显示本地规则结果。",
                    "detail": str(exc),
                },
            )
            return

        self.send_json(200, {"ok": True, **result})


def main() -> None:
    server = ThreadingHTTPServer(("0.0.0.0", PORT), DivinationHandler)
    print(f"Serving Divination on http://0.0.0.0:{PORT}")
    server.serve_forever()


if __name__ == "__main__":
    main()
