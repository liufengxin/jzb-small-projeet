//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    account: "",
    password: "",
    isChange: false
  },
  onLoad: function (options) {
    //初始化参数
    this.setData({
      isChange: options.isChange || false
    });
  },
  //account
  inputAccount: function (e) {
    this.setData({
      account: e.detail.value
    })
  },
  //pwd
  inputPwd: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  //login
  loginClick: function () {
    let account = this.data.account;
    let password = this.data.password;
    if (account && password) {
    } else {
      wx.showModal({
        title:"提示",
        content:"请输入用户名密码后登陆",
        showCancel:false
      })
    }
  }
})