//app.js
App({
  onLaunch() {
    this.setBage();
  },
  cart:wx.getStorageSync("ek-cart") || [],
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
        count:1
      });
    }
    wx.setStorageSync("ek-cart", this.cart)
    this.setBage();
  },
  minusCount(id){
    this.cart = this.cart.map(item =>{
      if(item.id === id) {
        if(item.count <= 1){
          console.log("必须大于1")
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
  delCount(id){
    this.cart = this.cart.filter(item => item.id !== id)
    wx.setStorageSync("ek-cart", this.cart)
    this.setBage();
    return this.cart;
  }
})