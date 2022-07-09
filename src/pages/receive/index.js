Page({
    data: {
        recipient_name: undefined,
        recipiet_phone: undefined,
        recipient_address: undefined,
        delivery_note: undefined,
        baggage_image: [],
        service_type: undefined,

        showOption1: false,
        showOption2: false,
        selected1: "23kg under",
        items1: ["23kg Over", "On 23kg", "Options different"],

        imgs: undefined,

        vehicle: 'motobike',

        curr_charge: 0
    },

    onSelect1(selected1) {
        this.setData({
            selected1
        });
    },
    onLoad(e) {
        this.setData({
            curr_charge: _curr_charge
        })
    },

    onTap(event) {
        my.navigateBack()
    },

    onClickFinished1(e) {
        this.setData({
            showOption1: true
        })
        my.showTabBar({
            animation: false
        })
    },

    onClickFinished2(e) {
        this.setData({
            showOption2: true
        })
        my.showTabBar({
            animation: false
        })
    },

    onClickClose1(e) {
        this.setData({
            showOption1: false
        })
        my.showTabBar({
            animation: true
        })
    },

    onClickClose2(e) {
        this.setData({
            showOption2: false
        })
        my.showTabBar({
            animation: true
        })
    },

    pageLogin(event) {
        my.createSelectorQuery()
            .select(event.currentTarget.id)
            .exec((ret) => {
                my.navigateTo({
                    url: "pages/payment/index"
                })
                _recipient_name = this.data.recipient_name
                _recipient_phone = this.data.recipient_phone
                _delivery_address = this.data.delivery_address
                _delivery_note = this.data.delivery_note
                _service_type = this.data.service_type
                _curr_charge += (this.data.service_type === "SB NOW" ? 2 : 0)
                console.log([_recipient_name, _recipient_phone, _delivery_address, _delivery_note, _service_type])
            })
    },

    onOpenNativeStore() {
        my.openNativeAppStore({
            googlePlayId: 'vn.tiki.app.tikiandroid',
            appleStoreId: '958100553',
            success: (res) => {
                console.log(res);
            },
            fail: (e) => {
                console.log(e);
            }
        });
    },
    updateName(e) {
        this.setData({
            recipient_name: e.detail.value
        })
    },
    updatePhone(e) {
        this.setData({
            recipient_phone: e.detail.value
        })
    },
    updateAddress(e) {
        this.setData({
            recipient_address: e.detail.value
        })
    },
    updateNote(e) {
        this.setData({
            delivery_note: e.detail.value
        })
    },
    updateShipping(e) {
        this.setData({
            service_type: e.detail.value[0] == 0 ? "SB NOW" : "SB STANDARD"
        })
        this.setData({
            curr_charge: _curr_charge + (this.data.service_type === "SB NOW" ? 2 : 0)
        })
    }
})