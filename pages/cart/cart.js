// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    totalPrice:0
  },
  jumpDetail(e){
    const item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/detail/detail?id=${item.id}&price=${item.price}&title=${item.title}&image_url=${item.image_url}`,
    })
  },
  toHome(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  getTotalPrice (){
    const total = app.cart.reduce((result,item) =>{
     result += item.count*item.price
        return result
    },0); 
    return total
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
    const total = this.getTotalPrice().toFixed(2);
    this.setData({
      list: app.cart,
      totalPrice: total
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