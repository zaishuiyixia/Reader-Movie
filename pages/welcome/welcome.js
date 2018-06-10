//index.js
//获取应用实例
const app = getApp()

Page({
  onTap: function() {
    wx.redirectTo({
      url: '../posts/posts'
    })
  }
})
