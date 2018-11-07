// pages/detail/detail.js
import ajax from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    isShow:true
  },
  addToCart () {
    this.setData({
      isShow: false
    }) 
  },
  delModal () {
    this.setData({
      isShow: true
    }) 
  },
  toDetail(e) {
    const item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/detail/detail?id=${item.id}&price=${(item.price/100).toFixed(2)}&title=${item.title}&image=${item.image_url}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载中……',
    })
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