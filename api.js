const express = require('express');
const { getData } = require('./data');
const app = express();
const port = 3000;

// 測試 hello george
app.get('/', (req, res) => {
  res.send('Hello, George!');
});

// 設定 /getData 路由
app.get('/getData', (req, res) => {
  getData((err, jsonData) => {
    if (err) {
      console.error('讀取 JSON 檔案出錯:', err);
      res.status(500).send('讀取 JSON 檔案出錯');
      return;
    }
    res.json(jsonData);
  });
});

app.listen(port, () => {
  console.log(`API 伺服器運行在 http://localhost:${port}`);
});
