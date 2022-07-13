Page({
  onLoading() {
    my.showLoading({ content: 'Loading...', delay: 1000 });
    setTimeout(() => {
      my.hideLoading();
    }, 5000);
  }
});