//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    id:null,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderList:[
        {
            status: "未上菜",
            recipe: "当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土。当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土",
            time: "2018/4/15 12:00"
        },
        {
            status: "已用餐",
            recipe: "当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土。当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土",
            time: "2018/4/15 12:00"
        },
        {
            status: "已用餐",
            recipe: "当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土。当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土",
            time: "2018/4/15 12:00"
        },
        {
            status: "已用餐",
            recipe: "当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土。当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土",
            time: "2018/4/15 12:00"
        },
        {
            status: "已用餐",
            recipe: "当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土。当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土",
            time: "2018/4/15 12:00"
        },
        {
            status: "已用餐",
            recipe: "当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土。当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土",
            time: "2018/4/15 12:00"
        },
        {
            status: "已用餐",
            recipe: "当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土。当你在凝视着深渊的时候，深渊也在凝视着你。今天的风儿甚是喧嚣。众里嫣然通一顾，人间颜色如尘土",
            time: "2018/4/15 12:00"
        }


    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        id: 10086
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          id: 10086
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            id: 10086
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
