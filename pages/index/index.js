//index.js
//获取应用实例
var app = getApp();
//引用
var fileData = require('../../utils/data.js')
Page({
  data: {
    banner_url: fileData.getBannerData(),
    interval: 3000,
    duration: 1000,
    vertical: false,
    indicatordots: true,
    autoplay: true,
    navTopItems: fileData.getIndexNavData(),
    curNavId: 1,
    curIndex: 0,
    colors: ["red", "orange", "yellow", "green", "purple"],
    navSectionItems: fileData.getSongList()
  },
  //实现页面字体颜色切换
  switchTap: function (res) {
    console.log(res.currentTarget.dataset.index)
    let id = res.currentTarget.dataset.id;
    let index = res.currentTarget.dataset.index
    this.setData({
      curNavId: id,
      curIndex: index
    })
  },
  // 加载更多
  laodMore: function (res) {

    console.log('到底了')
    //得到导航的下标
    var curid = this.data.curIndex;

    if (this.data.navSectionItems[curid] == 0) {
      return
    } else {
      //加载更多
      //concat()方法，他将2个或2个以上的数组连接起来
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 2000
      })

      //前 x=5+5=10 ,后10
      //前x=10+10=20 后20
      //前x=20+20=40 后40

      var that = this;
      that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat(that.data.navSectionItems[curid]);
      that.setData({
        list: that.data.navSectionItems
      })
    }
  },

  //跳转到详情页
  navigateDetail: function () {
    wx.navigateTo({
      url: '../detail/detail',
      success: function () {

        wx.setNavigationBarTitle({
          title: '详情页',
        })
        wx.showNavigationBarLoading();
        setTimeout(function () {

          wx.hideNavigationBarLoading();
        }, 2000)
      }

    })

  },

  //跳转book页面
  bookTap: function () {
    wx.navigateTo({
      url: '../book/book',
      success: function () {
        wx.setNavigationBarTitle({
          title: '预约渠道',
        })
        wx.showNavigationBarLoading();
        setTimeout(function () {

          wx.hideNavigationBarLoading();
        }, 2000)
      }
    })
  },


  //onLoad页面加载完成执行
  onLoad: function () {

    //加载一个弹框
    wx.showToast({
      title: '正在加载...',
      icon: 'loading',
      duration: 10000,
      mask: true
    })

    setTimeout(function () {

      wx.hideToast();
    }, 2000)

    //将我们的数据传到我们的结构层，通过this.setData
    this.setData({
      list: this.data.navSectionItems
    })
    console.log(this.data.navSectionItems)
  }
})
