var postsData = require('../../data/posts-data.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //小程序总是会读取data对象来做数据绑定，这个动作称为A
    //而这个A的执行，是在onLoad函数执行之后发生的
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化options为页面跳转所带来的参数
    this.setData({
      postList:postsData.postList
    });
  },
  onPostTap:function(event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'posts-detail/posts-detail?id=' + postId
    })
  }
})