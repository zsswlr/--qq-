// pages/technicain/technicain.js
var fileData=require('../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skillData: fileData.getSongList(),
    caseArray:['林俊杰','张国荣','迪丽热巴','鹿晗'],
    index:2
  
  },
  namechange:function(res){
    console.log(res)
    this.setData({
      index: res.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.skillData)
    this.setData({
      list: this.data.skillData[2]
    })
  },

  loadMore:function(){
    console.log('到底了，加载中...')
    //判断list的长度是否为0
    if (this.data.skillData.lenth===0){
      return
    }else{
      //加载数据
      wx.showToast({
        title: '加载中...',
        icon:'loading',
        duration:2000
      })
      //在这里我们是重复之前的数据(js里面的一个方法concat()方法，将我们的一个或多个数组连接起来)
      var that=this;
      that.data.skillData = that.data.skillData.concat(that.data.skillData[1]);
      that.setData({
        list: that.data.skillData[1]
      })
    }
  },
  //跳转
  navgeteDail:function(){
    wx.navigateTo({
      url:'../technicain_detail/technicain_detail'
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