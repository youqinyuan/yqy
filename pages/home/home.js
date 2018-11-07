// pages/home/home.js
import ajax from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id:1,               
      img:     "https://img.yzcdn.cn/upload_files/2018/07/20/FqHMk6FJZmh95NypGvYIWZ6EB1Xv.png?imageView2/2/w/730/h/0/q/75/format/webp",
      title:"乳汁奶油"
    }, {
        id: 2, 
        img: "https://img.yzcdn.cn/upload_files/2018/07/20/Fs34YbzKU118rJ9teuuwobpAfM7m.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "慕斯"
      }, {
        id: 3, 
        img: "https://img.yzcdn.cn/upload_files/2018/07/20/Ft9ELarUN8A11aJcqA70oabfhw8g.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "芝士"
      }, {
        id: 4, 
        img: "https://img.yzcdn.cn/upload_files/2018/07/20/Fi_MdS8gINz7rPoNX0ju2GEgDm3Y.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "巧克力"
      }, {
        id: 5, 
        img: "https://img.yzcdn.cn/upload_files/2018/07/20/FpoMACJHngW2M15kRtU3akTLH-u5.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "西点"
      }, {
        id: 6, 
        img: "https://img.yzcdn.cn/upload_files/2018/07/20/Fp41JUTXngUJ49fAw-KIR0iNIZAz.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "下午茶"
      }, {
        id: 7, img: "https://img.yzcdn.cn/upload_files/2018/07/20/FmFzOiFX5EaVUmU0zCRTno-GzS8w.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "私厨商店"
      }, {
        id: 8, 
        img: "https://img.yzcdn.cn/upload_files/2018/07/20/Fpv65Fh8FVojIxqFbkJVotI9XQrh.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "烘焙课程"
      }, {
        id: 9, img: "https://img.yzcdn.cn/upload_files/2018/07/20/FnqpyTvcLirqAYW2EXymb6n0m2gh.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "积分商城"
      }, {
        id: 10, 
        img: "https://img.yzcdn.cn/upload_files/2018/07/20/Fr2HMBHdMmfA7wkBr8G5Zr6p8f28.png?imageView2/2/w/730/h/0/q/75/format/webp",
        title: "每日抽奖"
      }],
    recommend: [{
      id: 419979622,
      image_url: "https://img.yzcdn.cn/upload_files/2018/05/29/FkcVcwNUxcCjmdbjm7J5gOxTy3Uw.jpg?imageView2/2/w/520/h/0/q/75/format/webp",
      title: "阳光青果(牛油果慕斯)",
      price: "238.00"
    }, {
        id: 420099673,
        image_url: "https://img.yzcdn.cn/upload_files/2018/07/18/Fop5b1n8SfmRhsi8Mdj6REon-grW.jpg?imageView2/2/w/520/h/0/q/75/format/webp",
        title: "拿破仑一世(拿破仑)",
        price:"288.00"
      }, {
        id: 420108764,
        image_url: "https://img.yzcdn.cn/upload_files/2018/07/18/FgowmlvfKtzdKe7G0M9NMErG5qU9.jpg?imageView2/2/w/520/h/0/q/75/format/webp",
        title: "美丽绽放(草莓慕斯)",
        price: "198.00"
      }],
    imgUrls: [
          'https://img.yzcdn.cn/upload_files/2018/08/19/Fqt-U-mMFgHlTAm1TNBWM9f0iKrQ.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      'https://img.yzcdn.cn/upload_files/2018/06/04/Fv8BenwGFTxBUQ32Pncc0kolOxz4.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
      'https://img.yzcdn.cn/upload_files/2018/06/04/FoIJgUSf0NCPTq7hj4c1XsLG9-S8.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
'https://img.yzcdn.cn/upload_files/2018/06/04/FrLBn0lfaGPBCKXw5QjsnluqHt1c.jpg?imageView2/2/w/730/h/0/q/75/format/webp',
'https://img.yzcdn.cn/upload_files/2018/07/20/Fs2R_5EBLs4DgOL0xrBNqNuKxnex.jpg?imageView2/2/w/730/h/0/q/75/format/webp'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    cream: [],
    musi: [],
    cheese:[]
  },
  toDetail(e) {
    const item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/detail/detail?id=${item.id}&price=${item.price}&title=${item.title}&image=${item.image_url}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ajax.get('https://h5.youzan.com/wscshop/showcase/goodsList.json?tagId=&page=1&pageSize=10&goodsIds=420096174%2C420096669%2C420096580%2C420099673%2C420101348%2C420105120%2C420100430%2C420101995&goodsFrom=0&isAdv=0&offlineId=0&kdt_id=40755689')
    .then(resp =>{
      this.setData({
        cream: resp.data.data.list
      })
    })
    .catch(err => console.log(reeor)),
      ajax.get('https://h5.youzan.com/wscshop/showcase/goodsList.json?tagId=&page=1&pageSize=10&goodsIds=419979622%2C420108746%2C420106668%2C420111169%2C420107678%2C420105565%2C420106635%2C420112050%2C421116456%2C421114153&goodsFrom=0&isAdv=0&offlineId=0&kdt_id=40755689')
      .then(resp => {
        this.setData({
          musi: resp.data.data.list
        })
      })
      .catch(err => console.log(reeor)),
      ajax.get('https://h5.youzan.com/wscshop/showcase/goodsList.json?tagId=&page=1&pageSize=10&goodsIds=420098428%2C420102979%2C420103600%2C420099827&goodsFrom=0&isAdv=0&offlineId=0&kdt_id=40755689')
      .then(resp => {
        this.setData({
          cheese: resp.data.data.list
        })
      })
      .catch(err => console.log(reeor))
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