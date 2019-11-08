// pages/post/post.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  formSubmit(event) {
    console.log(event)
    let story = event.detail.value
    
    wx.request({
      url: 'https://fml.shanghaiwogeng.com/api/v1/stories',
      data: story,
      method: 'POST',
      success: this.submitSuccess
    })

   
  },

  submitSuccess(res) {
    if (res.statusCode === 201) {
      wx.navigateBack()
      wx.showToast({
        title: 'Story posted',
        icon: 'success'
      })
    }
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})