// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    totalMoney:0,
    checkoutNum:0,
    allcheck:false,
    changeAllCheck:true
  },
  toHome(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  minusCount(e){
    const id = e.currentTarget.dataset.id;
    app.minusCount(id)
    this.setData({
      list: app.cart
    })
  },
  addCount(e){
    const id = e.currentTarget.dataset.id;
    app.addCount(id)
    this.setData({
      list: app.cart
    })
  },
  delCount(e) {
    const id = e.currentTarget.dataset.id;
    app.delCount(id)
    this.setData({
      list: app.cart
    },()=>{
      wx.showToast({
        title: '删除成功',
      })
    })
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
    this.setData({
      list: app.cart
    })
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