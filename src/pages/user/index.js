Page({

  onChange(images) {
    my.alert({
      title: 'Uploader was changed',
      content: JSON.stringify(images)
    });
  },

  toPageOrder(e){
    my.navigateTo({ 
      url: 'pages/order/index'
    });
  }
});