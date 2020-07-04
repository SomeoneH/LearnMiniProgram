// pages/image/image.js
Page({
  data: {
    imgPath: ''
  },
  chooseAlbum() {
    wx.chooseImage({
      complete: (res) => {
        // console.log(res)
        this.setData({
          imgPath: res.tempFilePaths
        })
      },
    })
  },
  imageLoad() {
    console.log('imageLoad')
  }
})