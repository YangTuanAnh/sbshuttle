Page({
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  returnHome(event) {
      my.createSelectorQuery()
          .select(event.currentTarget.id)
          .exec((ret) => {
              my.navigateBack({
                  url: "pages/home/index"
              })
          })
  }
});