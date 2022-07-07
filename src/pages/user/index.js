Page({
  onReady() {
    const audio = my.createAudioContext('audio1');
    audio.pause();
  },
  onChange(images) {
    my.alert({
      title: 'Uploader was changed',
      content: JSON.stringify(images)
    });
  }
});