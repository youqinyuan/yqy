//app.js
App({
  onLaunch() {
    this.setBage();
    wx.login({
      success: res => {
        wx.request({
          url: this.globalData.wx_url_1 + res.code + this.globalData.wx_url_2,
          success: res => {
            this.globalData.openid = res.data.openid;
          }
        })
      }
    });
  },
  globalData: {
    openid: 0,
    wx_url_1: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx7b773f3764fe432d&secret=88e2705211b70aec18f52a51d8fb2451&js_code=',
    wx_url_2: '&grant_type=authorization_code'
  },
  cart:wx.getStorageSync("ek-cart") || [],
  isAllChecked:false,
  setBage() {
    const total = this.cart.reduce((result,item) =>{
      result += item.count;
      return result;
    },0)
    wx.setTabBarBadge({
      index: 2,
      text: `${total}`
    })
  },
  addToCart(item) {
    const isInCart = this.cart.some(cartItem => cartItem.id === item.id);
    if(isInCart){
      this.cart = this.cart.map(cartItem =>{
        if(cartItem.id === item.id){
          cartItem.count ++;
        }
        return cartItem;
      })
    }else{
      this.cart.push({
        ...item,
        checked:false,
        count:1
      });
    }
    wx.setStorageSync("ek-cart", this.cart)
    this.setBage();
  },
  minusCount(id){
    this.cart = this.cart.map(item =>{
      if(item.id === id) {
        if(item.count == 1){
          item.count=1
        }else{
          item.count -=1
        }
      }
      return item;
    })
    wx.setStorageSync("ek-cart", this.cart)
    this.setBage();
    return this.cart;
  },
  addCount(id){
    this.cart = this.cart.map(item =>{
      if(item.id === id) {
        item.count +=1;
      }
      return item;
    })
    wx.setStorageSync("ek-cart", this.cart)
    this.setBage();
    return this.cart;
  },
  //单选
  changecheck(id){
    this.cart = this.cart.map(item =>{
      if(item.id == id){
        item.checked = !item.checked
      }
      return item
    })
    this.all();
  },
  //总价
  getTotalPrice(){
    const total = this.cart.reduce((result,item)=>{
      if(item.checked){
        result += item.price * item.count
      }
      return result;
    },0)
    return total;
  },
  //数量
  getTotalNum(){
    const num = this.cart.reduce((result,item) =>{
      if(item.checked){
        result +=item.count
      }
      return result;
    },0)
    return num;
  },
 //全选
  allchecked(){
    this.isAllChecked = !this.isAllChecked;
    if (this.isAllChecked){
      this.cart = this.cart.map(item =>{
        item.checked = true;
        return item;
      })
    }else{
      this.cart = this.cart.map(item => {
        item.checked = false;
        return item;
      })
    }
  },
  //勾选（每一个）
  all(){
    const num = this.cart.filter(item => item.checked === true).length
    const len = this.cart.length;
    if(num === len){
      this.isAllChecked = true;
    }else{
      this.isAllChecked = false;
    }
  },
  delCount(id){
    this.cart = this.cart.filter(item => item.id !== id)
    wx.setStorageSync("ek-cart", this.cart)
    this.setBage();
    return this.cart;
  }

})