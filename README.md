> 还在设计中，未开发完成

## 小程序云函数的替代方案 wxf

仓库提供两个包 `wxf-cloud-server` 和 `wxf-cloud-client` 

## 使用方法

### 云函数

``` javascript 
const { Container } = require('wxf-cloud-server');

const container = new Container({
  cloudFunctionDir: './', // 云函数所在的根目录
});

// container 会拦截云函数中通过require引入的 wx-server-sdk 包，默认返回空对象
// 可通过如下方式实现 wx-server-sdk 提供的 API
container.replacer.use({
  getWXContext() {
    return { 
      APPID: 'APPID',
      OPENID: 'OPENID'
    }
  }
});

container.start({ port: 80 });
```


### 小程序
替换小程序代码中所有 wx.cloud 为 `wxf-cloud-client` 默认导出的对象

``` javascript 
const wxfCloud = require('wxf-cloud-client')

wx.cloud.init({
  domain: 'wxf-cloud-server所在的域名'
});


- const cloudResp = await wx.cloud.callFunction({
+ const cloudResp = await wxfCloud.callFunction({
  name: 'defaultFunction',
  data: {
    text: 'demo'
  }
}) 
```
