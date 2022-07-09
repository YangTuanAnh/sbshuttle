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
              my.redirectTo({
                  url: "pages/home/index"
              })
          })
  }
});