import os
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "8000"))


def main() -> None:
    handler = partial(SimpleHTTPRequestHandler, directory=str(BASE_DIR))
    server = ThreadingHTTPServer(("0.0.0.0", PORT), handler)
    print(f"Serving Divination on http://0.0.0.0:{PORT}")
    server.serve_forever()


if __name__ == "__main__":
    main()
