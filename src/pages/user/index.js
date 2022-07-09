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
  },

    updateName(e) {
        _user_name = e.detail.value
        console.log(_user_name)
    },
    updateEmail(e) {
        _user_email = e.detail.value
        console.log(_user_email)
    },
    updateAddress(e) {
        _user_address = e.detail.value
        console.log(_user_address)
    },
    updatePhone(e) {
        _user_phone = e.detail.value
        console.log(_user_phone)
    }
});