Page ({



  toPagePayment(){
    my.navigateTo({
      url : "pages/payment/index"
    })
  },
  updateName(e) {
    _user_name=e.detail.value
  },
  updatePhone(e) {
    _user_phone=e.detail.value
  },
  updateEmail(e) {
    _user_email=e.detail.value
  }
})