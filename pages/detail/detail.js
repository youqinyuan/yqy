// pages/detail/detail.js
import ajax from '../../utils/request.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    options:{},
    isShow:false
  },
  addToCart (e) {
   const item = e.currentTarget.dataset.item
    app.addToCart(item);
    wx.showToast({
      title: '加入购物车成功',
    })
  },
  addCart () {
    this.setData({
      isShow: true
    }) 
  },
  delModal () {
    this.setData({
      isShow: false
    }) 
  },
  jumpCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
    app.setBage();
  },
  add(e){
  
  },
  reduce(e){

  },
  toDetail(e) {
    const item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/detail/detail?id=${item.id}&price=${(item.price / 100).toFixed(2)}&title=${item.title}&image_url=${item.image_url}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      options
    })
    ajax.get('https://h5.youzan.com/wscshop/goods/recommend-goods.json?alias=2oqh7qnajb2uh&storeId=&count=10&kdt_id=40755689')
      .then(resp => {
        this.setData({
          goods: resp.data.data
        })
      })
      .catch(err => console.log(error))
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