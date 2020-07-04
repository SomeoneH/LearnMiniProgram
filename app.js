// 注册小程序实例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // onLaunch也能获取用户进入场景的信息
    console.log('onLaunch---小程序初始化完成')
    // 获取用户信息属于异步调用
    // wx.getUserInfo({
    //   success: (res) => {
    //     console.log(res)
    //   },
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // options参数里面包含了用户的进入场景信息，可以用来判断小程序的进入场景
    console.log('onShow---界面显示出来')
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('onHide---界面被隐藏')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('onError---小程序发生错误的时候执行')
  },

  globalData: {
    name: '蔡徐坤',
    skill: '唱跳Rap篮球'
  }
})
