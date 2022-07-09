<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes


Page({
  data: {
<<<<<<< Updated upstream
    location: undefined
  },
   //fucntion tester address
   onGetLocation(event) {
=======
    location: undefined,

  },

  onGetLocation(event) {
>>>>>>> Stashed changes
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
});