Page({
    data: {
        pickup_time: undefined,
        curr_charge: 0,
        package_ID: undefined
    },
    onLoad(query) {
        _package_ID = "SBB" + (100000 + Math.round(Math.random() * 900000))
        this.setData({
            pickup_time: _pickup_time,
            curr_charge: _curr_charge,
            package_ID: _package_ID
        })

    },
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    gotoConfirm() {
        my.navigateTo({
            url: "pages/odersDetail/index"
        })
        _total_charge = this.data.curr_charge
    }
});