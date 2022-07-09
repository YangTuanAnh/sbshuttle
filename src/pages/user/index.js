Page({

  data: {

    phone: 19006035
  },
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
  },


 

  onPhoneCall() {
    my.makePhoneCall({
      number: this.data.phone,
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        my.alert({ title: error, content: JSON.stringify(e) });
      }
    });
  }
});