App({
    onLaunch(options) {
        console.log('App onLaunch');
        my.redirectTo({
            url: 'pages/splash/index'
        })
    },
    onShow(options) {},

    onShareAppMessage(options) {
        return {
            title: 'Awesome App',
            desc: 'Awesome App',
            path: 'pages/home/index',
        };
    }
});