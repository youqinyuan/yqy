// pages/search/search.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:["拿破仑蛋糕","魔法黑森林","最佳拍档","相伴永远","火红之爱","淘气乐园","树莓心语","旺果","阳光青果","榛心满满","茫茫人海","开心精灵果","最佳伴侣","奇幻之旅","美丽绽放"],
    history: wx.getStorageSync("ek-search") || [],
    inputValue:''
  },
  jumpMall(){
    wx.switchTab({
      url: '/pages/mall/mall'
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  search(){
    const value = this.data.inputValue;
    const text = this.data.history
    const title = text.filter(item => item !== value)
    title.unshift(value)
    console.log(value)
    this.setData({
      history: title,
      inputValue: ''
    })
    wx.setStorageSync("ek-search", this.data.history)
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