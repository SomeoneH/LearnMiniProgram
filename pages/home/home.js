// pages/home/home.js
// 用过getApp()方法，可以获取APP()创建的实例
const app =getApp()
// console.log(app.globalData)
const name = app.globalData.name
const skill = app.globalData.skill
console.log(name, skill)

// 调用Page方法，注册一个页面
Page({
  // 2初始化数据
  data: {
    list: []
  },
  // 3监听wxml中的一些事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  // 1监听生命周期
  onLoad() {
    console.log('onLoad---页面加载完成')
    // 可以在这里发送网络请求,获取数据
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/recommend',
      success: (res) => {
        // console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })

  },
  onShow() {
    console.log('onShow---页面显示出来')
  },
  onReady() {
    console.log('onReady---页面【初次】渲染完成')
  },
  onHide() {
    console.log('onHide---页面隐藏')
  },
  onUnload() {
    console.log('onUnload---页面销毁')
  },
  // 4.监听其他事件（滚动，下拉刷新，滚动到底部）
  onPageScroll(obj) {
    console.log(obj)
  },
  onReachBottom() {
    console.log('onReachBottom---滚动到底部')
  },
  onPullDownRefresh() {
    console.log('onPullDownRefresh---下拉刷新')
  }
})