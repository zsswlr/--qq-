// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose_name:'选择联系人',
    index:0,
    range:[

      '贵州金阳新区，李先生，电话：18786056435',
      '安顺新区，王先生，电话：18786056435',
      '阳关小区，李先生，电话：18786056435',
      '大营坡王江小区，李先生，电话：18786056435',
      '贵州花溪金阳新区，李先生，电话：18786056435'
      

    ],
    date:'2016-5-26',
    time:"19:34",
    showToastBol:true
  },
  nameChange:function(res){
    console.log(res.detail.value)
    this.setData({
      index: res.detail.value
    })

  },
  bindDateChange: function (res) {
    console.log(res.detail.value)
    this.setData({
      date: res.detail.value
    })

  },
  bindTimeChange: function (res) {
    console.log(res.detail.value)
    this.setData({
      time: res.detail.value
    })

  },
  bindToastTap:function(){

    this.setData({
      showToastBol:false
      
    })
  },
  hideToast:function(){
    this.setData({
      showToastBol:true

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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