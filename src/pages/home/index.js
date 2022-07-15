
Page({
    data: {
        showOption1: false,
        showTerm: true,
        showPrivacy: false,
        selected1: "AM",
        items1: ["AM", "PM"],

        selected2: "1:00 - 2:00",
        items2: ["1:00 - 2:00", "2:00 - 3:00", "3:00 - 4:00",
            "4:00 - 5:00", "5:00 - 6:00", "6:00 - 7:00",
            "7:00 - 8:00", "8:00 - 9:00", "9:00 - 10:00",
            "10:00 - 11:00", "11:00 - 12:00", "12:00 - 1:00"
        ],
        baggage_amount: 0,
        curr_charge: 0,
        location: "Please select location",

        //poppup book
        show: false,
        position: 'top',
        animation: true,
        mask: true,
        zIndex: 10,
        disableScroll: true,

        //Data page home 
        storageList: ["SBS Airport", "SBS City Central"],
        storageValue: "Please select options"


    },
    onLoad(e) {

    },
    
    calculatePrice() {
        _curr_change = (this.data.baggage_amount * 6 + (this.data.selected2 === "12:00 - 1:00" ? 5 : 0)) * 23600;
        this.setData({
          // change money to vietnammese
            curr_charge: _curr_change
        })
        console.log(this.data.curr_charge)
    },
    onReady() {
        my.hideTabBar({
            animation: false
        })
    },
    onSelect1(selected1) {
        this.setData({
            selected1
        });
    },
    onSelect2(selected2) {
        this.setData({
            selected2
        });
    },
    onClose() {
        this.setData({
            showTerm: false,
        });
    },
    onClosePrivacy() {
        this.setData({
            showPrivacy: false
        })
    },
    onClickContinue(e) {
        this.setData({
            showTerm: false,
            showPrivacy: true
        })

    },
    onClickPrivacy(e) {
        this.setData({
            showPrivacy: false
        })
        my.showTabBar({
            animation: true
        })
    },




    onRightClick(event) {
        console.log('onRightClick Image/Icon', event);
    },
    onLeftClick(event) {
        console.log('onLeftClick Image/Icon', event);
    },



    toPageReceive(event) {
        my.createSelectorQuery()
            .select(event.currentTarget.id)
            .exec((ret) => {
                my.navigateTo({
                    url: "pages/receive/index"
                })
            })
    },

    toPageAddress(event) {
                my.navigateTo({
                    url: "pages/getAddress/index"
                })
    },
    //fucntion tester address
    getAddress(event) {
        my.getLocation({
            cacheTimeout: 30,
            success: (res) => {
                this.setData({
                    location: res
                });
                console.log(location);
            },
            fail: (e) => {
                console.log(e);

                my.alert({
                    title: 'Notification',
                    content: 'Sorry, we can not see your address',
                    buttonText: 'Agree',
                    success: () => {
                        console.log('Success');
                    },
                    fail: () => {
                        console.log('Fail');
                    },
                    complete: () => {
                        console.log('Complete');
                    }
                });
            }
        });
    },


    onChange(e) {
        console.log('onChange: ', e);
        this.setData({
            location: _pickup_point
        })
        console.log(this.data.location)
    },

    //loading for submit

    //Yes when see car
    onConfirm() {



        my.showLoading({
            content: 'Seaching...'
        });

        setTimeout(() => {
            my.confirm({
                title: 'Are you sure Booking',
                content: 'Booking now',
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                success: (result) => {
                    if (result.confirm == true) {
                        my.navigateTo({
                            url: "pages/signup/index"
                        })
                        _storage = this.data.storageValue
                        _pickup_point = this.data.location
                        _pickup_time = this.data.selected2 + " " + this.data.selected1
                        _baggage_amount = this.data.baggage_amount
                        _curr_charge = this.data.curr_charge
                        _storage = this.data.storageValue
                        _making_new_order = true
                        console.log([_storage, _pickup_point, _pickup_time, _baggage_amount])
                    }
                },
                fail: (e) => {
                    my.alert({
                        title: `${e}`
                    });
                },
                complete: () => {
                    console.log('Complete');
                }
            });

            my.hideLoading();
        }, 3000);

    },

    onClickFinished1(e) {
        this.setData({
            showOption1: true
        })
        my.hideTabBar({
            animation: false
        })

    },

    onClickClose1(e) {
        this.setData({
            showOption1: false
        })
        my.showTabBar({
            animation: true
        })
    },
    storageSheet(e) {
        console.log(e.detail.value[0])
        this.setData({
            storageValue: this.data.storageList[e.detail.value[0]]
        })
    },
    onTap(e) {
        my.navigateTo({
            url: "pages/receive/index"
        })
    },
    callBackFn(e) {
        this.setData({
            baggage_amount: e
        })
        console.log(this.data.baggage_amount)
        this.calculatePrice()
    },
    onClickClose2(e) {
        this.setData({
            showOption2: false
        })
        my.showTabBar({
            animation: true
        })
    },
    updateShipping(e) {
        this.setData({
            service_type: e.detail.value[0] == 0 ? "SB NOW" : "SB STANDARD"
        })
        this.calculatePrice()
    },
    onClickFinished2(e) {
        this.setData({
            showOption2: true
        })
        my.showTabBar({
            animation: false
        })
    },


    onShareAppMessage(options) {
      return {
        title: 'Awesome App',
        desc: 'Awesome App',
        path: 'pages/splash/index',
      };
    }
});