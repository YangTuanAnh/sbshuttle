App({
    globalData: {
        _orders: [],
        _making_new_order: false,

        _pickup_time: undefined,
        _pickup_point: undefined,
        _baggage_weight: undefined,
        _baggage_amount: undefined,
        _storage: undefined,

        _recipient_name: undefined,
        _recipient_phone: undefined,
        _delivery_address: undefined,
        _delivery_note: undefined,
        _baggage_image: [],
        _service_type: undefined,

        _user_name: undefined,
        _user_email: undefined,
        _user_address: undefined,
        _user_phone: undefined,

        _curr_charge: undefined,
        _total_charge: undefined,
        _package_ID: undefined,
    },

    onLaunch(options) {
        console.log('App onLaunch');
    },
    onShow(options) {},

    onShareAppMessage(options) {
        return {
            title: 'Awesome App',
            desc: 'Awesome App',
            path: 'pages/splash/index',
        };
    }
});