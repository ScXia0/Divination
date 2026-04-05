# Divination

一个可部署到 Render 的“当天运势占卜”网页。

## 功能

- 输入生日、生肖、占卜日期、今日心念
- 生成当天总运、事业、感情、财运、精力五项结果
- 同时给出塔罗抽牌与周易卦象
- 输出幸运颜色、数字、方位与行动建议

## 本地运行

```bash
python3 server.py
```

浏览器打开 `http://127.0.0.1:8000`

## Render 部署

如果你把 `Divination/` 单独作为一个 Git 仓库上传到 GitHub，Render 可直接读取本目录内的 `render.yaml`。

如果你继续使用当前大仓库：

1. 在 Render 新建一个 `Web Service`
2. 连接当前 GitHub 仓库
3. 将 Root Directory 设置为 `Divination`
4. Build Command 填 `echo "No build step required"`
5. Start Command 填 `python server.py`
