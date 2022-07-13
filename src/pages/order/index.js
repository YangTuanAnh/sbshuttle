Page({
    data: {
        activeTab1: 0,
        activeTab2: 0,
        tabs1: [{
                title: 'Current order'
            },
            {
                title: 'Order history'
            },
        ],

    },
    onTabClick({
        index,
        tabsName
    }) {
        this.setData({
            [tabsName]: index
        });

        my.navigateTo({
          url : "pages/odersDetail/index"
        })

    },
    gotoReceive() {
        my.navigateTo({
            url: "pages/receive/index"
        })
    }
})