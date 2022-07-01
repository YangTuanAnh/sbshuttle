Page({
    onTap(event) {
        my.createSelectorQuery()
            .select(event.currentTarget.id)
            .exec((ret) => {
                if (event.currentTarget.id == 'btn_send')
                    my.navigateBack()
            })
    }
})