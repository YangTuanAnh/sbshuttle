<<<<<<< Updated upstream
Page({
    data: {
        location: undefined
    },
    //fucntion tester address
    onGetLocation(event) {
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
=======


Page({
  data: {
    location: undefined
  },
   //fucntion tester address
   onGetLocation(event) {
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
>>>>>>> Stashed changes

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