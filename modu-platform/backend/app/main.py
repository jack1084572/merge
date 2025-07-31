from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/posts':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')  # 允许跨域
            self.end_headers()

            posts = [
                {"id": 1, "title": "第一篇文章", "summary": "这是第一篇文章的摘要"},
                {"id": 2, "title": "第二篇文章", "summary": "这是第二篇文章的摘要"},
            ]
            self.wfile.write(json.dumps(posts).encode('utf-8'))
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(b'Not Found')

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 8000), MyHandler)
    print('Server running at http://0.0.0.0:8000')
    server.serve_forever()
