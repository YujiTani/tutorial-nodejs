const http = require("http");
const PORT = 8080;
const html = require('fs').readFileSync('./index.html');

// webサーバーを作る
// サーバーを作る関数
const server = http.createServer((req, res) => {
  // req, resはブラウザから受け取る
  // ブラウザからアクセスが来た時の処理
  res.writeHead( // レスポンスに含めるヘッダー情報
    200, // HTTPコード
    { "Content-Type": "text/html" },
  );
  res.write(html);
  res.end();
});

server.listen(PORT, () => {
    console.log("server running");
    console.log("http://localhost:8080");
});
