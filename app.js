//app.js
App({
  onLaunch() {
    this.setBage();
  },
  cart:wx.getStorageSync("ek-cart") || [],
  setBage() {
    const total = this. cart . reduce((result,item) =>{
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
  }
})