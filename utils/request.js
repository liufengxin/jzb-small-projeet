function sendRrquest(url, method, data, header) {
  let promise = new Promise(function (resolve, reject) {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.request({
      url: url,
      data: data,
      method: method,
      header: header,
      success: resolve,
      fail: reject,
      complete: function () {
        wx.hideNavigationBarLoading(); //完成停止加载
        wx.stopPullDownRefresh(); //停止下拉刷新
      }
    })
  });
  return promise;
};

function MyHttp(ALL_API) {
  let resource = {};

  for (let actionName in ALL_API) {
    let _config = ALL_API[actionName];

    resource[actionName] = (pdata) => {
      let _params_data = pdata;
      return sendRrquest(_config.url, _config.method, _params_data, {
        'content-type': 'application/json'
      });
    }
  }
  return resource;
}

export default MyHttp;