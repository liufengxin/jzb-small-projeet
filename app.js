//app.js
//data数据不区分大小写
import Api from 'utils/api.js';

//app.js
App({
  onLaunch: function () {
    // 存储手机型号
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systemInfo = res
        if (res.model.indexOf('iPhone X') >= 0) {
          this.globalData.isIphoneX = true
        }
      }
    })
    this.login()
  },
  onShow: function () { },
  onHide: function () { },
  onError: function () { },
  login: function () {
    //要先判断session  我们不需要获取微信头像等信息，不需要弹框getUserInfo
    wx.login({
      success: (res) => {
        let code = res.code
        Api.getUserInfo(code).then((res) => {
          //判断返回值，后台是否有关联的账号
          //加入 callback 以防止获取过慢  获取回调方法 app.userInfoReadyCallback = res => {}
          if (this.userInfoReadyCallback) {
            console.log("进入callback");
            this.userInfoReadyCallback(res)
          }
        })
      },
      fail: (res) => {
        wx.showToast({ title: '微信登陆失败！', icon: 'loading', duration: 2000 })
      }
    })
  },
  globalData: {
    isIphoneX: false,//用于配置
    userInfo: null,//存取我们自己的用户信息
    wxUserInfo: null,//存取获取到的微信的用户信息
    systemInfo: null,//手机信息
    authorizationStatus: false,//授权状态
  }
})