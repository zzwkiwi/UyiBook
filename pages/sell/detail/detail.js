const app = getApp()
const config = require("../../../config.js");
Page({

      /**
       * 页面的初始数据
       */
      data: {

      },
      // onLoad: function(e) {
      //       this.getdetail(e.id);
      // },
      // //回到首页
      // home() {
      //       wx.switchTab({
      //             url: '/pages/index/index',
      //       })
      // },
      // //获取订单详情
      // // getdetail(_id) {
      // //       let that = this;
      // //       db.collection('order').where({
      // //             status: 1,
      // //             sellid: _id
      // //       }).get({
      // //             success(e) {
      // //                   that.setData({
      // //                         creatTime: config.formTime(e.data[0].creat),
      // //                         detail: e.data[0]
      // //                   })
      // //                   that.getBuyer(e.data[0]._openid);
      // //             },
      // //             fail() {
      // //                   wx.showToast({
      // //                         title: '获取失败，请稍后到订单中心内查看',
      // //                         icon: 'none'
      // //                   })
      // //             }
      // //       })
      // // },
      // //获取卖家信息
      // getBuyer(m) {
      //       let that = this;
      //       db.collection('user').where({
      //             _openid: m
      //       }).get({
      //             success: function(res) {
      //                   wx.hideLoading();
      //                   that.setData({
      //                         userinfo: res.data[0]
      //                   })
      //             }
      //       })
      // },
 
 
   
      // //电话拨打
      // phone(e) {
      //       wx.makePhoneCall({
      //             phoneNumber: e.currentTarget.dataset.phone
      //       })
      // },
})