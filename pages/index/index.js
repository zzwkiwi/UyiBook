// index.js
// 获取应用实例
const app = getApp();
const config = require("../../config.js");
Page({
  data: {
    motto: '欢迎来到U易书',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false, //wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
    open_id: ""
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  goToEdit: function () {
    wx.navigateTo({
      url: '../edit/edit',
    })
  },
  // userLogin:function(){
  //   let url = "http://192.168.43.9:8080/uyibook_api/user/userLogin"
  //   wx.login({
  //     provider: 'weixin',
  //     success: function success(resp) {
  //       var code = resp.code;
  //       wx.getUserInfo({ //获取用户账号基本信息
  //         provider: 'weixin',
  //         success: function success(resp) {
  //           var nickName = resp.userInfo.nickName; //昵称
  //           var avatarUrl = resp.userInfo.avatarUrl; //头像地址
  //           var data = {
  //             code: code,
  //             nickname: nickName,
  //             photo: avatarUrl};
  //           wx.request({
  //             url: url,
  //             method:"POST",
  //             data:data,
  //             success:function(resp){
  //               console.log(resp)
  //             }
  //           })
  //         } });

  //     } });
  // },
  // pages/user/user.jsPage({ data: {  openid: ''
  // 获取用户openid
  // getOpenid: function () {
  //   let that = this; //获取openid不需要授权
  //   wx.login({
  //     success: function (res) { //请求自己后台获取用户openid
  //       wx.request({
  //         url: 'http://192.168.43.9:8080/uyibook_api/user/login',
  //         header:{
  //           token: res.code,
  //         },
  //         data: {
  //           // appid: 'wxa20f50573d308f75',s
  //           // secret: '1b93d11dfa05863e1a47315b205228a8',
  //           // open_id: res.code
  //           "code": res.code,
  //           "nickname": wx.getStorageSync('nickName'),
  //           "photo": wx.getStorageSync('photo')
  //         },
          
  //         success: function (response) {
  //           var openid = response.data.openid;
  //           console.log('请求获取openid:' + openid); //可以把openid存到本地，方便以后调用
  //           wx.setStorageSync('openid', openid);
  //           that.setData({
  //             openid: openid
  //           })
  //         }
  //       })
  //     }
  //   })
  // },

  getUserProfile(e) {
    var _this = this;
    // _this.userLogin()
    wx.getUserProfile({
      desc: '用于展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res)
        console.log(res.userInfo);
        _this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorageSync('photo', res.userInfo.avatarUrl);
        wx.setStorageSync('nickName', res.userInfo.nickName);
      },
      fail: function (error) {
        console.log(error)
      }
    })

  //   // wx.login({
  //   //   success: function (code) {
  //   //     console.log(code.code)
  //   //     wx.request({
  //   //       url: 'http://uyibook.top:8605/User/postUserInfo',
  //   //       data: {
  //   //         name: wx.getStorageSync('nickName'), //昵称
  //   //         open_id: code.code
  //   //       },
  //   //       header: {
  //   //         'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  //   //       },
  //   //       success: function (data) {
  //   //         console.log(data.data.openid); //此处是返回的openid
  //   //       }
  //   //     })
  //   //   }
  //   // })
  //   // wx.login({
  //   //   success(res) {
  //   //     console.log("成功" + res.code)
  //   //     if (res.code) {
  //   //       _this.setData({
  //   //         open_id: res.code
  //   //       })
  //   //     }
  //   //     wx.request({
  //   //       url: 'http://192.168.43.41:8605/User/postUserInfo',
  //   //       header: {
  //   //         'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  //   //       },
  //   //       data: {
  //   //         name: "老0", //昵称
  //   //         open_id: _this.data.open_id
  //   //       },
  //   //       success: function (resp) {
  //   //         console.log(resp)
  //   //       },
  //   //       fail: function (error) {
  //   //         console.log(error)
  //   //       }
  //   //     })

  //   //   },
  //   //   fail: function (error) {
  //   //     console.log("错误" + error)
  //   //   }
  //   // })

  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   // wx.getUserProfile({
  //   //   desc: '用于展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //   //   success: (res) => {
  //   //     // console.log(res)
  //   //     console.log(res.userInfo);
  //   //     this.setData({
  //   //       userInfo: res.userInfo,
  //   //       hasUserInfo: true
  //   //     })
  //   //     wx.setStorage('userId', res.userId);
  //   //     console.log("name:" + res.userInfo.nickName);

  //   //     wx.request({
  //   //       url: 'http://192.168.43.41:8605/User/postUserInfo',
  //   //       header: {
  //   //         'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  //   //       },
  //   //       data: {
  //   //         name: res.userInfo.nickName, //昵称
  //   //         open_id: res.userId
  //   //       },
  //   //       success: function (resp) {
  //   //         console.log(resp)
  //   //       },
  //   //       fail: function (error) {
  //   //         console.log(error)
  //   //       }
  //   //     })

  //   //     // wx.getStorage("userId")
  //   //   },
  //   //   fail: function (error) {
  //   //     console.log(error)
  //   //   }
  //   // })
  },


  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  go(e) {
    let that = this;
    if (e.currentTarget.dataset.status == '1') {
      if (!that.data.hasUserInfo) {
        wx.showModal({
          title: '温馨提示',
          content: '该功能需要登录可使用，是否马上登录',
          success(res) {
            if (res.confirm) {
              that.getUserProfile()
            }
          }
        })
        return false
      }
    }
    wx.navigateTo({
      url: e.currentTarget.dataset.go
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userinfo: app.userinfo
    })
  },

  //预览图片
  preview(e) {
    wx.previewImage({
      urls: e.currentTarget.dataset.link.split(",")
    });
  },
  onShareAppMessage() {
    return {
      title: JSON.parse(config.data).share_title,
      imageUrl: JSON.parse(config.data).share_img
    }
  },
})