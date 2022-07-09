Page({
    data: {
        showTerm: true,
        selected1: "AM",
        items1: ["AM", "PM"],

        selected2: "1:00 - 2:00",
        items2: ["1:00 - 2:00", "2:00 - 3:00", "3:00 - 4:00",
            "4:00 - 5:00", "5:00 - 6:00", "6:00 - 7:00",
            "7:00 - 8:00", "8:00 - 9:00", "9:00 - 10:00",
            "10:00 - 11:00", "11:00 - 12:00", "12:00 - 1:00"
        ],
<<<<<<< Updated upstream
=======
       

>>>>>>> Stashed changes

        //poppup book
        show: false,
        position: 'top',
        animation: true,
        mask: true,
        zIndex: 10,
        disableScroll: true,

        //Data page home 


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
    onClickContinue(e) {
        this.setData({
            showTerm: false
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
    /*
    onTap(event) {
        my.createSelectorQuery()
            .select(event.currentTarget.id)
            .exec((ret) => {
                my.navigateTo({
                    url: "pages/receive/index"
                })
            })
    }, */

    toPageAddress(event) {
<<<<<<< Updated upstream
        my.createSelectorQuery()
            .select(event.currentTarget.id)
            .exec((ret) => {
                my.navigateTo({
                    url: "pages/getAddress/index"
                })
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

=======
      my.createSelectorQuery()
          .select(event.currentTarget.id)
          .exec((ret) => {
              my.navigateTo({
                  url: "pages/getAddress/index"
              })
          })
  },
   
  
    pageLogin(event) {
      my.createSelectorQuery()
          .select(event.currentTarget.id)
          .exec((ret) => {
              my.navigateTo({
                  url: "pages/receive/index"
              })
          })
      },
>>>>>>> Stashed changes

      onChange(e) {
        console.log('onChange: ', e);
    },

    //loading for submit

       //Yes when see car
       onConfirm() {

          

        my.showLoading({ content: 'Seaching...' });

        setTimeout(() => {
          my.confirm({
            title: 'Do you sure Booking',
            content: 'Booking now', 
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            success: (result) => {

              my.alert({ title: `${result.confirm}` });
              if(confirmButtonText == true){
                my.navigateTo({
                  url: "pages/login/index"
                })
              }
            },
            fail: (e) => {
              my.alert({ title: `${e}` });
            },
            complete: () => {
              console.log('Complete');
            }
          });


            my.hideLoading();
        }, 5000);

    }
});