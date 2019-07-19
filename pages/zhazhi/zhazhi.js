// pages/zhazhi/zhazhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lisLike:{

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home', 
      
      success:function(res) {
        that.setData({
          recommend:res.data.recommend,
          markType:res.data.markType,
          articleList:res.data.articleList
        })
      }
    })
  // 30-50 second
    var listLikeStorage = wx.getStorageSync('listLike');
    if(!listLikeStorage){
        listLikeStorage = {}
    }
    this.setData({
      listLike:listLikeStorage, 
    })
    // console.log(this.data.listLike); 
  },

    second:function(e){
      console.log(e);
      var index = e.currentTarget.dataset.articleindex;
      console.log(index);

      var listLike = this.data.listLike;
      console.log(listLike);
      
      var isLike = listLike[index];
      
      listLike[index] = !isLike;
      this.setData({
        listLike: listLike
      })
      wx.setStorageSync('listLike',listLike)
    },


  firsttap:function(e){
    // console.log(e.currentTarget.dataset.articletype)
    wx.showActionSheet({
      itemList: ['内容过期了', '内容和'+e.currentTarget.dataset.articletype+'不相关', '不再显示来自'+e.currentTarget.dataset.articletype+'的内容'],
      success (res) {
        console.log(res.tapIndex)
      },
      
    })
   },


   type:function(e){
     console.log(e)
     var typeid = e.currentTarget.dataset.articletypeid;
     wx.navigateTo({
      url: '/pages/type/type?typeid='+ typeid,
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