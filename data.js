const fs = require('fs');

class JsonData {
  // 將 JSON 資料讀取並導出
  static getData(callback) {
    fs.readFile('./Deneen-Davis.json', 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      try {
        const jsonData = JSON.parse(data);
        callback(null, jsonData);
      } catch (err) {
        callback(err, null);
      }
    });
  }
}

module.exports = JsonData