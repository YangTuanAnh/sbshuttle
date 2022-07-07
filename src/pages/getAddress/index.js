Page({
  data: {
    location: undefined,

    street: 'Nguyễn Văn Luông',
    city: 'TPHCM',
    district: "6",
    ward: "Center",
    full_name: 'Nguyễn Minh Thông',
    phone_number: '0703338458'
    
    // streetErrorMsg: 'Vui lòng nhập đủ địa chỉ',
    // cityErrorMsg: 'Vui lòng nhập thành phố',
    // districtErrorMsg: 'Vui lòng nhập quận',
    // wardErrorMsg: 'Vui lòng nhập phường',
  },
  /*
  onChangeAddress(address) {
    console.log('address :', address);
  },
  onFullAddress(address) {
    console.log('full address :', address);
  }, */

  onGetLocation() {
    my.getLocation({
      cacheTimeout: 30,
      type: 1,
      success: (res) => {
        this.setData({ location: res });
      },
      fail: (e) => {
        console.log(e);
      }
    });
  }
});