// app.js
const config = require("config.js");
App({
  userLogin: function () {
    let that = this;
    let url = "http://192.168.43.9:8080/uyibook_api/user/userLogin"
    wx.login({
      provider: 'weixin',
      success: function success(resp) {
        var code = resp.code;
        wx.getUserInfo({ //获取用户账号基本信息
          provider: 'weixin',
          success: function success(resp) {
            var nickName = resp.userInfo.nickName; //昵称
            var avatarUrl = resp.userInfo.avatarUrl; //头像地址
            var data = {
              code: code,
              nickname: nickName,
              photo: avatarUrl
            };
            wx.request({
              url: url,
              method: "POST",
              data: data,
              success: function (resp) {
                console.log(resp)
                that.globalData.openid = resp.token
                console.log("token",resp.data.token)
              }
            })
          }
        });

      }
    });
  },

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.getSystemInfo();
    let t = this;
    // 登录
    t.userLogin()
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
        // wx.request({
        //   url: 'http://uyibook.top:8605/User/postUserInfo',
        //   data: {
        //     appid: 'wxa20f50573d308f75',
        //     secret: '1b93d11dfa05863e1a47315b205228a8',
        //     code: res.code
        //   },
        //   success: function (response) {
        //     var openid = response.data.openid;
        //     console.log('请求获取openid:' + openid); //可以把openid存到本地，方便以后调用
        //     wx.setStorageSync('openid', openid);
        //     t.globalData.openid = response.data.openid;
        //     // that.setData({
        //     //   openid: "获取到的openid：" + openid
        //     // })
        //   }
        // })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  onShow: function () {
    //隐藏系统tabbar
    // wx.hideTabBar();
  },
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    apiConfig: {
      loginUrl: "http://uyibook.top:8605/User/postUserInfo",
    },
    openid: '',
    canReflect: true,
    systemInfo: null, //客户端设备信息
    userInfo: null,
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#1c1c1b",
      "list": [{
          "pagePath": "/pages/index/index",
          "iconPath": "icon/search-0.jpg",
          "selectedIconPath": "icon/search-1.jpg",
          "text": "首页"
        },
        {
          "pagePath": "pages/scan/scan",
          "iconPath": "icon/midel.png",
          "isSpecial": true,
        },
        {
          "pagePath": "/pages/mine/mine",
          "iconPath": "icon/order-0.jpg",
          "selectedIconPath": "icon/order-1.jpg",
          "text": "我的"
        }
      ]
    }
  }
})