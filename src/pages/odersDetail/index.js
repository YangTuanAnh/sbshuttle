Page({
    data: {
        user_name: undefined,
        user_address: undefined,
        pickup_point: undefined,
        user_phone: undefined,
        recipient_phone: 0903759375,
        pickup_time: undefined,
        total_charge: undefined,
        package_ID: undefined
    },
    onLoad(query) {
        this.setData({
            package_ID: _package_ID,
            user_name: _user_name,
            user_address: _user_address,
            pickup_point: _pickup_point,
            user_phone: _user_phone,
            pickup_time: _pickup_time,
            total_charge: _total_charge
        })
        if (_making_new_order) {
            //_orders.push(this.data)
            _making_new_order = false
        }
        console.log(_orders)
    },
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    returnHome(event) {
        my.createSelectorQuery()
            .select(event.currentTarget.id)
            .exec((ret) => {
                my.redirectTo({url:"pages/home/index"})
            })
    }
});