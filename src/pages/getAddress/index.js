Page({
    data: {
        location: undefined
    },
    //fucntion tester address
    onGetLocation(event) {
        my.getLocation({
            cacheTimeout: 30,
            success: (res) => {
              //my.alert({title: JSON.stringify(res)});
              
                console.log(location);
                my.request({
                  url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=10.825092327694604,106.71640260908983&key=AIzaSyAK2_5SODQLzce2y09piTirbHaB1JwmZo0',
                  method: 'GET',
                  success: (rs) => {
                    //  my.alert({title: JSON.stringify(rs)});
                    this.setData({
                      location: rs.results[1].formatted_address,
                    })
                    // this.setData({ location:  rs.results[0].formatted_address, 
                      
                    //   loading: false });

                      
                  }
                });
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