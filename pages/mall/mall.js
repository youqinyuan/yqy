// pages/mall/mall.js
import ajax from '../../utils/request.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   cakes:[],
   page: 1,
    pageSize: 20
  },
  addToCart(e){
    const item = this.data.cakes.filter(cake => cake.id === e.currentTarget.dataset.id)[0]
    app.addToCart(item);
    wx.showToast({
      title: '加入购物车成功',
    })
  },
  toDetail (e) {
    const item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/detail/detail?id=${item.id}&image_url=${item.image_url}&price=${item.price}&title=${item.title}`,
    })
  },
  loadCakes(){
    ajax.get(`https://h5.youzan.com/wscshop/showcase/goods/allGoods.json?page=${this.data.page}&pageSize=${this.data.pageSize}&kdt_id=40755689`)
      .then(resp => {
        this.setData({
          cakes: this.data.cakes.concat(resp.data.data.list)
        });
        this.page ++;
      })
      .catch(err => console.log(reeor))
  },
  loadMore() {
    this.loadCakes();
  },
  refreshCake() {
    this.setData({
      page:1,
      cakes:[],
    },() =>{
      this.loadCakes()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadCakes();
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