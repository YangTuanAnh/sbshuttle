Page({
    data: {
        createdTime: undefined
    },
    onLoad(query) {
        this.lottieContext = my.createLottieContext('lottie');

    },
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    splashMove() {
        my.redirectTo({
            url: "pages/home/index"
        })
    }
});