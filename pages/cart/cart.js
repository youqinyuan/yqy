// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    totalPrice:0,
    checkedNum:0,
    isAllChecked:false,
    all:true
  },
  toHome(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  minusCount(e){
    const id = e.currentTarget.dataset.id;
    app.minusCount(id)
    const money = app.getTotalPrice();
    const num = app.getTotalNum();
    this.setData({
      list: app.cart,
      totalPrice:money,
      checkedNum:num
    })
  },
  addCount(e){
    const id = e.currentTarget.dataset.id;
    app.addCount(id)
    const money = app.getTotalPrice();
    const num = app.getTotalNum();
    this.setData({
      list: app.cart,
      totalPrice: money,
      checkedNum: num
    })
  },
  delCount(e) {
    const id = e.currentTarget.dataset.id;
    app.delCount(id)
    const money = app.getTotalPrice();
    const num = app.getTotalNum();
    this.setData({
      list: app.cart,
      totalPrice: money,
      checkedNum: num
    },()=>{
      wx.showToast({
        title: '删除成功',
      })
    })
  },
  //单选
  changecheck(e){
    const id = parseInt(e.currentTarget.dataset.id);
    app.changecheck(id);
    const money = app.getTotalPrice();
    const num = app.getTotalNum();
    this.setData({
      totalPrice: money,
      checkedNum: num,
      isAllChecked: app.isAllChecked
    })
  },
 
  allchecked(){
    app.allchecked()
    const money = app.getTotalPrice();
    const num = app.getTotalNum();
    this.setData({
      list: app.cart,
      totalPrice: money,
      checkedNum: num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const money = app.getTotalPrice();
    const num = app.getTotalNum();
     this.setData({
       list: app.cart,
       totalPrice:money,
       checkedNum: num
     })
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
    const money = app.getTotalPrice();
    const num = app.getTotalNum();
    this.setData({
      list: app.cart,
      totalPrice: money,
      checkedNum: num
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