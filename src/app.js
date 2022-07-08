App({
  data :{

  },

  onLaunch(options) {
    console.log('App onLaunch');
  },
  onShow(options) {
  },


  onShareAppMessage(options) {
    return {
      title: 'Awesome App',
      desc: 'Awesome App',
      path: 'pages/home/index',
    };
  }
});