// pages/readPage/readPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      play:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       console.log(options)
       var id = options.typeid;
       var that = this;
      wx.request({
        url: 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/getArticleDetail/' + id, 
       
        success:function(res) {
          that.setData({
            titleInfo:res.data.data
           
          })
        }
      })
     
   
  },

   music:function(){
    var that = this
    var audio =  wx.getBackgroundAudioManager()
    var play = that.data.play
    audio.title='此时此刻'
    audio.singer = '许巍'
    audio.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    
    // audio.src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
    if(play){
      audio.pause()
    }else{
      audio.src='http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
   
  }
      that.setData({
       play:!play,
      })
     
      
      audio.onPause(function(){
        that.setData({
          play:false,
        })
      })

      audio.onStop(function(){
        that.setData({
          play:false,
        })
      })

      audio.onEnded(function(){
        that.setData({
          play:false,
        })
      })

      audio.onPlay(function(){
        that.setData({
          play:true,
        })
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