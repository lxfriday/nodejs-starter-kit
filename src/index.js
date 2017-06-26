import { GBKRequest, UTF8Request } from './utils/request';

const cheerio = require('cheerio');

const URL = 'http://www.xiami.com/';

GBKRequest(URL, (data) => {
  if (data) {
    const $ = cheerio.load(data);



    // -------------------------------------------------------
  }
  // fs.writeFile(path.resolve(__dirname, 'test.json'), JSON.stringify(jsonObj), (err) => {
  //   console.log(err);
  // });
})
  .catch((err) => {
    console.trace('页面加载失败', URL);
    console.error(err);
  });
