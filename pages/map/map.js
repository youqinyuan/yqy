Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioSrc: "",
    avatarSrc: "",
    markers: [{
      iconPath: "/libs/img/positions.png",
      id: 0,
      latitude: 30.628977,
      longitude: 104.083111,
      width: 50,
      height: 50
    }]
  },
  chooseAvatar() {
    wx.chooseImage({
      count: 1,
      sizeType: [],
      sourceType: [],
      success: (res) => {
        console.log(res)
        this.setData({
          avatarSrc: res.tempFilePaths[0]
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  takePhoto() {

  },
  callme() {
    wx.makePhoneCall({
      phoneNumber: '10000',
      success: (res) => {
        const recorderManager = wx.getRecorderManager();
        recorderManager.onStop((res) => {
          console.log('recorder stop', res)
          const { tempFilePath } = res
          this.audioCtx = wx.createAudioContext('myAudio');
          this.audioCtx.setSrc(tempFilePath);
          this.audioCtx.play();
        })
        const options = {
          duration: 10000,
          sampleRate: 44100,
          numberOfChannels: 1,
          encodeBitRate: 192000,
          format: 'mp3',
          frameSize: 50
        }

        recorderManager.start(options);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onMarkerTap(e) {
    const {
      latitude,
      longitude
    } = this.data.markers[0];

    wx.openLocation({
      latitude,
      longitude,
      scale: '',
      name: '千锋教育',
      address: '力宝大厦19楼',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
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