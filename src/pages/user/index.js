Page({

    onChange(images) {
        my.alert({
            title: 'Uploader was changed',
            content: JSON.stringify(images)
        });
    },

    toPageOrder(e) {
        my.navigateTo({
            url: 'pages/order/index'
        });
    },
    updateName(e) {
        _user_name = e.detail.value
        console.log(_user_name)
    },
    updateEmail(e) {
        _user_email = e.detail.value
        console.log(_user_email)
    },
    updateAddress(e) {
        _user_address = e.detail.value
        console.log(_user_address)
    },
    updatePhone(e) {
        _user_phone = e.detail.value
        console.log(_user_phone)
    }
});