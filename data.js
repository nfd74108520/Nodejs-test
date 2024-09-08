const fs = require('fs');

class JsonData {
  // 將 JSON 資料讀取並導出
  static getData(response) {
    fs.readFile('./Deneen-Davis.json', 'utf8', (err, data) => {
      if (err) {
        response(err, null);
        return;
      }
      try {
        const jsonData = JSON.parse(data);
        response(null, jsonData);
      } catch (err) {
        response(err, null);
      }
    });
  }
}

module.exports = JsonData