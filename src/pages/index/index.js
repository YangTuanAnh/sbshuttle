Page({
  data: {
    items1:["1:00-2:00", "2:00-3:00", "3:00-4:00", 
    "4:00-5:00", "5:00-6:00", "6:00-7:00", 
    "7:00-8:00", "8:00-9:00", "9:00-10:00", 
    "10:00-11:00", "11:00-12:00", "12:00-1:00"],
    selected1: "1:00-2:00",
    items2:["Belongings", "Packages"],
    selected2: "Belongings",
    street: '',
    city: null,
    district: null,
    ward: null,
    full_name: '',
    phone_number: ''
  },
  onSelect(selected) {
    this.setData({selected});
  },
  onSelect1(selected1) {
    this.setData({ selected1 });
  },
  onSelect2(selected2) {
    this.setData({selected2})
  },
  onChangeAddress(address) {
    console.log('address :', address);
  },
  onFullAddress(address) {
    console.log('full address :', address);
  }
});