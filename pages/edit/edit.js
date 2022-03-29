// pages/edit/edit.js
const app = getApp();
const config = require("../../config.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
    dormitory: "",
    college: "",
    ids: -1,
    phone: '',
    university: "",
    campus: JSON.parse(config.data).campus,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // this.getdetail();
    wx.request({
      //url: app.globalData.apiConfig.getUserUrl, //访问后端,定义对应的url
      url: "http://uyibook.top:8605/User/getUser/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk2ODc0ODksInVzZXJJZCI6NH0.UdZp1kaUfgHaIrG7fJ_ZooDPYdhGjjR_2Xs7O_OiEy0",
      method: "GET",
      header: {
        token: wx.getStorageSync('token')
      },
      success: function (res) {
        console.log(res);
        wx.hideLoading();
        wx.stopPullDownRefresh(); //暂停刷新动作
        //判断校区
        if(res.data.data.university == "厦门校区"){
          that.ids = 0;
        }
        else that.ids = 1;
        that.setData({
          phone:res.data.data.telephone,
          dormitory:res.data.data.dormitory,
          university:res.data.data.university,
          college:res.data.data.college,
          ids:that.ids,
    });
    //console.log("电话"+phone);
    
      },
      fail: function (res) {
        console.log("失败："+res);
  }
    })
    
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  phoneInput(e) {
    this.data.phone = e.detail.value;
  },
  chooseCampus(e) {
    let that = this;
    that.setData({
      ids: e.detail.value
    })
  },
  collegeInput(e) {
    let that = this;
    that.setData({
      college: e.detail.value
    })
  },
  dormitoryInput(e) {
    let that = this;
    that.setData({
      dormitory: e.detail.value
    })
  },

  getUserInfo(e) {
    let that = this;
    // let test = e.detail.errMsg.indexOf("ok");
    // if (test == '-1') {
    //   wx.showToast({
    //     title: '请授权后方可使用',
    //     icon: 'none',
    //     duration: 2000
    //   });
    // } else {
    that.setData({
      userInfo: e.detail.userInfo
    })
   
    that.check();
    // }
  },
  //校检
  check() {
    let that = this;
    //校检手机
    let phone = that.data.phone;
    if (phone == '') {
      wx.showToast({
        title: '请先输入您的电话',
        icon: 'none',
        duration: 2000
      });
      return false
    }
    //校检校区
    let ids = that.data.ids;
    let campus = that.data.campus;
    if (ids == -1) {
      wx.showToast({
        title: '请先获取您的校区',
        icon: 'none',
        duration: 2000
      });
    }
    //校检学院
    let college = that.data.college;
    if (college == '') {
      wx.showToast({
        title: '请先输入您的学院',
        icon: 'none',
        duration: 2000
      });
      return false
    }
    //校检宿舍
    let dormitory = that.data.dormitory;
    if (dormitory == '') {
      wx.showToast({
        title: '请先输入您的宿舍',
        icon: 'none',
        duration: 2000
      });
      return false
    }
    wx.showLoading({
      title: '正在提交',
    })
    let token = wx.getStorageSync("token")
    wx.request({
      url: app.globalData.apiConfig.editUrl, //访问后端,定义对应的url
      method: "POST",
      header: {
        token: token
      },
      data: {
        telephone: that.data.phone,
        university: that.data.campus[that.data.ids].name,
        college: that.data.college,
        dormitory: that.data.dormitory,
      },
      success: function (res) {
        console.log(res)
        wx.hideLoading();
        wx.showToast({
          title: '修改成功',
          icon: 'success'
        })
        wx.switchTab({
          url: '/pages/mine/mine',
    })
      },
      fail() {
        wx.hideLoading();
        wx.showToast({
          title: '编辑失败，请重新提交',
          icon: 'none',
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