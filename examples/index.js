/**
 * 使用示例
 */

const CloudFuncitonContainer = require('../packages/server/index');

const container = new CloudFuncitonContainer({
  dir: './',
});

container.replacer.use({
  getWXContext() {
    return { 
      APPID: 'APPID',
      OPENID: 'OPENID'
    }
  }
});

container.start({ port: 3000 });
