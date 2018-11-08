// pages/mine/mine.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   isPhoto:false
  },
  message: wx.getStorageSync("name") || {},
  bindGetUserInfo(e){
    this.setData({
      isPhoto:true,
      message:e.detail.userInfo
    },() =>{
      wx.showToast({
        title: '登录成功',
      })
    })
    wx.setStorageSync("name", e.detail.userInfo)
  },
  quit(e){
    wx.removeStorageSync('name')
    this.setData({
      message:{},
      isPhoto: false
    }, () =>{
      wx.showToast({
        title: '退出成功',
      })
    })
    wx.setStorageSync("name", e.detail.userInfo)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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