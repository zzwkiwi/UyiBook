// pages/mine/mine.js
const app = getApp()   //获取app.js中定义的全局数据globalData

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '一秒登录，体验所有功能',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false//wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // wx.login({
        //   success: res => {
        //     let code = res.code //这里获取的就是登陆的code，可以传送给后端来换取openid和unionid
        //     let data = {} //请求数据
        //     let methods = "GET" // 请求方式
        //     app.postAjax("" + code, data, methods).then(res => { // 具体的换取方法请参考微信官方文档以下路径
        //       console.log(res) //获取后端传来的值。
        //     })
        //   }
        // })
      },
    })
  },
  goToEdit: function(){
    wx.navigateTo({
      url: '../edit/edit',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      userinfo: app.userinfo
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})