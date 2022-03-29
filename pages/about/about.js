Page({

  /**
   * 页面的初始数据
   */
  data: {
        des:'本程序由原生小程序开发，数据存储及相关信息等处理全部使用小程序云开发功能。\n\n灵感的起源，来自现有的二手书小程序多抓鱼与校内的二手物品交易群。\n\n希望每本书都能实最大的价值，找到自己最好的归宿。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onReady: function () {

  },
  //复制
  copy(e) {
        wx.setClipboardData({
              data: e.currentTarget.dataset.copy,
              success: res => {
                    wx.showToast({
                          title: '复制' + e.currentTarget.dataset.name + '成功',
                          icon: 'success',
                          duration: 1000,
                    })
              }
        })
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