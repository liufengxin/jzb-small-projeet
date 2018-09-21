//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
      name: "刘丰鑫",
      avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537330771996&di=c685b589ddf26a2e425ea7e9a05afe4a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201412%2F07%2F20141207211755_CKXBL.jpeg",
      phone: "13852653265"
    },
    getUserInfoStatus: false
  },
  onLoad: function(options) {
    if (!this.getUserInfoStatus) {
      this.showModal();
    }
  },
  //跳转登录
  navigatorUserLogin: function() {
    this.setData({
      getUserInfoStatus: false
    })
    wx.navigateTo({
      url: '/pages/login/login?isChange=true',
    })
  },
  //修改密码
  changePwd: function() {
    if (!this.getUserInfoStatus) {
      this.showModal();
      return;
    }
  },
  //修改手机号
  changePhone: function() {
    if (!this.getUserInfoStatus) {
      this.showModal();
      return;
    }
  },
  //提示登陆弹框
  showModal: function() {
    wx.showModal({
      title: "提示",
      content: "未登录计支宝账号，是否登录？",
      showCancel: true,
      success: res => {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/login/login?isChange=true',
          })
        }
      }
    })
  }
})