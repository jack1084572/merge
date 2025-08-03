from http.server import BaseHTTPRequestHandler, HTTPServer
import json

# 简单的内存数据库
users_db = {}

class MyHandler(BaseHTTPRequestHandler):
    def _set_headers(self, status=200, content_type='application/json'):
        self.send_response(status)
        self.send_header('Content-type', content_type)
        self.send_header('Access-Control-Allow-Origin', '*')  # CORS
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        if self.path == '/posts':
            self._set_headers()
            posts = [
                {"id": 1, "title": "第一篇文章", "summary": "这是第一篇文章的摘要"},
                {"id": 2, "title": "第二篇文章", "summary": "这是第二篇文章的摘要"},
            ]
            self.wfile.write(json.dumps(posts).encode('utf-8'))
        else:
            self._set_headers(404, 'text/plain')
            self.wfile.write(b'Not Found')

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode()
        try:
            data = json.loads(body)
        except json.JSONDecodeError:
            self._set_headers(400)
            self.wfile.write(json.dumps({"error": "请求体不是有效 JSON"}, ensure_ascii=False).encode('utf-8'))

            return

        if self.path == '/register':
            username = data.get("username")
            password = data.get("password")

            if not username or not password:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "用户名或密码不能为空"}, ensure_ascii=False).encode('utf-8'))

            elif username in users_db:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "用户名已存在"}, ensure_ascii=False).encode('utf-8'))

            else:
                users_db[username] = password
                self._set_headers()
                self.wfile.write(json.dumps({"message": "注册成功"}, ensure_ascii=False).encode('utf-8'))


        elif self.path == '/login':
            username = data.get("username")
            password = data.get("password")

            if users_db.get(username) == password:
                self._set_headers()
                self.wfile.write(json.dumps({"message": "注册成功"}, ensure_ascii=False).encode('utf-8'))

            else:
                self._set_headers(401)
                self.wfile.write(json.dumps({"error": "用户名或密码错误"}, ensure_ascii=False).encode('utf-8'))


        else:
            self._set_headers(404, 'text/plain')
            self.wfile.write(b'Not Found')

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 8000), MyHandler)
    print('✅ Server running at http://0.0.0.0:8000')
    server.serve_forever()
