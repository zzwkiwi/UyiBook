// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "selectedColor": "#3C2DCB",
        "color": "#68acaf",
        "borderStyle": "black",
        "list": [{
            "pagePath": "/pages/index/index",
            "text": "首页",
            "iconPath": "/icon/search-0.jpg",
            "selectedIconPath": "/icon/search-1.jpg"
          },
          {
            "pagePath": "/pages/scan/scan",
            "iconPath": "icon/midel.png",
            "isSpecial": true,
            // "text": "发布"
          },
          {
            "pagePath": "/pages/mine/mine",
            "text": "我的",
            "iconPath": "icon/order-0.jpg",
            "selectedIconPath": "icon/order-1.jpg"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.includes('iPhone X'),
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})