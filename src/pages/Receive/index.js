Page({
    data: {
        selected1: "AM",
        items1: ["AM", "PM"],

        selected2: "1:00 - 2:00",
        items2: ["1:00 - 2:00", "2:00 - 3:00", "3:00 - 4:00",
            "4:00 - 5:00", "5:00 - 6:00", "6:00 - 7:00",
            "7:00 - 8:00", "8:00 - 9:00", "9:00 - 10:00",
            "10:00 - 11:00", "11:00 - 12:00", "12:00 - 1:00"
        ],

    },
    onTap(event) {
        my.createSelectorQuery()
            .select(event.currentTarget.id)
            .exec((ret) => {
                if (event.currentTarget.id == 'btn_send')
                    my.navigateBack()
            })
    },
    onSelect1(selected1) {
        this.setData({
            selected1
        });
    },
    onSelect2(selected2) {
        this.setData({
            selected2
        });
    },
    onChangeAddress(address) {
        console.log('address :', address);
    },
    onFullAddress(address) {
        console.log('full address :', address);
    },
    onChange(e) {
        console.log('onChange', e);
    },


    onClick(event) {
        console.log('onClick Chip', event);
    },
    onRightClick(event) {
        console.log('onRightClick Image/Icon', event);
    },
    onLeftClick(event) {
        console.log('onLeftClick Image/Icon', event);
    },
    handleTap() {
        console.log("tap!")
    },
    onSubmit(event) {
        my.createSelectorQuery()
            .select(event.currentTarget.id)
            .exec((ret) => {
                my.navigateTo({
                    url: "pages/receipt/index"
                })
            })
    }
})