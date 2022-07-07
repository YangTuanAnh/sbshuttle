Page({

    data: {
        showOption1: false,
        showOption2: false,
        selected1: "23kg under",
        items1: ["23kg Over", "On 23kg", "Options different"],

        imgs: undefined,

        vehicle: 'motobike'
    },

    onSelect1(selected1) {
        this.setData({
            selected1
        });
    },


    onTap(event) {
        my.navigateBack()
    },


    onChooseImage() {
        my.chooseImage({
            count: 5,
            success: (res) => {
                console.log(res);
                this.setData({
                    imgs: res.filePaths
                });
            },
            fail: (e) => {
                console.log(e);
            }
        });
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
                    url: "pages/login/index"
                })
            })
    }
})