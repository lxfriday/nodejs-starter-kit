const http = require('http');
const rp = require('request-promise');
const iconv = require('iconv-lite');
const Promise = require('bluebird');

/**
 * request which set the encode as GB2312
 * @param {*string} url request dest
 */
export function GBKRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      const data = [];
      res.on('data', (chunk) => {
        data.push(chunk);
      });
      res.on('end', () => {
        resolve(iconv.decode(Buffer.concat(data), 'GB2312'));
      });
    }).on('error', (err) => {
      reject(err);
      console.error(`页面加载失败 ===> ${url}`);
    });
  });
}

/**
 * request which set the encode as default UTF8
 * @param {*string} url  request dest
 * @param {*string} method request method
 */
export function UTF8Request(url, method = 'GET') {
  return new Promise((resolve, reject) => {
    rp({
      method,
      url,
    })
      .then((html) => {
        resolve(html);
      })
      .catch((err) => {
        reject(err);
        console.error(`页面加载失败 ===> ${url}`);
      });
  });
}
