// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      var typeid = options.typeid;
      var that = this;
      wx.request({
        url: 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine/getRecommendInfo/' + typeid, 
        // 女性穿搭  吃喝玩乐 没有数据
        success:function(res) {
          that.setData({
            titleInfo:res.data.data
           
          })
        }
      })
    
  
    wx.request({
      url: 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/getArticleTypeList/' + typeid, 
      
      success:function(res) {
        that.setData({
          articleList:res.data.data
         
        })
      }
    })
  },

  readPage:function(e){
      console.log(e)
      var id = e.currentTarget.dataset.atid;
      wx.navigateTo({
        url: '/pages/readPage/readPage?typeid='+ id,
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})