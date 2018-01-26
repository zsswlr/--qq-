//轮播图的数据图片
function getBannerData() {

  var arr = [
    'https://y.gtimg.cn/music/photo_new/T003R720x288M000001hQosw190axa.jpg?max_age=2592000',
    'https://y.gtimg.cn/music/photo_new/T003R720x288M000000i0tLT1WbOGY.jpg?max_age=2592000',
    'https://y.gtimg.cn/music/photo_new/T003R720x288M000001N51ji4925o5.jpg?max_age=2592000',
    'https://y.gtimg.cn/music/photo_new/T003R720x288M000002ukmJ510nDTx.jpg?max_age=2592000',
  ]
  return arr
}
//导航数据
function getIndexNavData() {

  var arr = [

    {
      id: 1,
      icon: '../../images/nav_icon_01.png',
      title: '推存'
    },
    {
      id: 2,
      icon: '../../images/nav_icon_02.png',
      title: '热歌'
    },
    {
      id: 3,
      icon: '../../images/nav_icon_03.png',
      title: '欧美'
    },
    {
      id: 4,
      icon: '../../images/nav_icon_04.png',
      title: '日韩'
    },
    {
      id: 5,
      icon: '../../images/nav_icon_05.png',
      title: '大陆'
    }


  ]

  return arr

}
// list列表
function getIndexNavSectionData() {

  var arr = [

    [


      {

        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_02.png",
        price: "￥100",
        message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'

      },

      {

        subject: "爱丽克EircParisSalon",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_03.png",
        price: "￥1150",
        message: '的PaaS云服务.七牛存储 七牛云为企业提供对象存储服'

      },

      {

        subject: "伊本造型",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_04.png",
        price: "￥1047",
        message: '伊本造型是由著名形象设计师杨进先生创办。'

      },
      {

        subject: "秋季自然特价美甲",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_01.png",
        price: "￥187",
        message: '我们最求得是没有最长的时间特价'

      },

      {

        subject: "画对了妆，微微一笑颜值倍儿高！",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_05.png",
        price: "￥87",
        message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'

      }

    ],
    [
      {

        subject: "秋季自然特价美甲",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_01.png",
        price: "￥187",
        message: '我们最求得是没有最长的时间特价'

      },

      {

        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_02.png",
        price: "￥100",
        message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'

      },

      {

        subject: "爱丽克EircParisSalon",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_03.png",
        price: "￥1150",
        message: '的PaaS云服务.七牛存储 七牛云为企业提供对象存储服'

      },
      {

        subject: "画对了妆，微微一笑颜值倍儿高！",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_05.png",
        price: "￥87",
        message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'

      }


    ],
    [
      {

        subject: "秋季自然特价美甲",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_01.png",
        price: "￥187",
        message: '我们最求得是没有最长的时间特价'

      },

      {

        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_02.png",
        price: "￥100",
        message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'

      },

      {

        subject: "爱丽克EircParisSalon",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_03.png",
        price: "￥1150",
        message: '的PaaS云服务.七牛存储 七牛云为企业提供对象存储服'

      }

    ],
    [
      {

        subject: "秋季自然特价美甲",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_01.png",
        price: "￥187",
        message: '我们最求得是没有最长的时间特价'

      },

      {

        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_02.png",
        price: "￥100",
        message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'

      }

    ],
    [
      {

        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://ojk4698oq.bkt.clouddn.com/recommend_img_02.png",
        price: "￥100",
        message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'

      }
    ]

  ]
  return arr
}

function getSongList(){
   var arr = [
     [ {
       "id": 33,
       "listenCount": 5882500,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_33_300_212846372.jpg",
       "songList": [{
         "singername": "GAI",
         "songname": "沧海一声笑 (Live)"
       }, {
         "singername": "张韶涵",
         "songname": "梦里花 (Live)"
       }, {
         "singername": "Jessie J",
         "songname": "Domino (Live)"
       }],
       "topTitle": "巅峰榜·歌手2018",
       "type": 0
     }, {
       "id": 30,
       "listenCount": 9800000,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_30_300_212846879.jpg",
       "songList": [{
         "singername": "林俊杰",
         "songname": "我们的爱 (Live)"
       }, {
         "singername": "林忆莲",
         "songname": "我好想你 (Live)"
       }, {
         "singername": "张靓颖",
         "songname": "天真有邪 (Live)"
       }],
       "topTitle": "巅峰榜·梦想的声音",
       "type": 0
     }, {
       "id": 28,
       "listenCount": 18582736,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_212628854.jpg",
       "songList": [{
         "singername": "新乐尘符",
         "songname": "123我爱你"
       }, {
         "singername": "胡66",
         "songname": "空空如也"
       }, {
         "singername": "海潮哥",
         "songname": "C哩C哩"
       }],
       "topTitle": "巅峰榜·网络歌曲",
       "type": 0
     }, {
       "id": 5,
       "listenCount": 9900000,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_5_300_212846661.jpg",
       "songList": [{
         "singername": "GAI/双笙",
         "songname": "都市惊奇夜"
       }, {
         "singername": "王菲",
         "songname": "无问西东"
       }, {
         "singername": "赵天宇/周震南",
         "songname": "吸引力法则"
       }],
       "topTitle": "巅峰榜·内地",
       "type": 0
     }, {
       "id": 6,
       "listenCount": 2630580,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_6_300_212730868.jpg",
       "songList": [{
         "singername": "萧敬腾",
         "songname": "皮囊"
       }, {
         "singername": "蔡健雅",
         "songname": "贪图"
       }, {
         "singername": "蔡健雅",
         "songname": "重来"
       }],
       "topTitle": "巅峰榜·港台",
       "type": 0
     }, {
       "id": 3,
       "listenCount": 9300000,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_212820441.jpg",
       "songList": [{
         "singername": "Troye Sivan",
         "songname": "My My My!"
       }, {
         "singername": "Liam Payne/Rita Ora",
         "songname": "For You (Fifty Shades Freed)"
       }, {
         "singername": "Enrique Iglesias/Bad Bunny",
         "songname": "EL BAÑO"
       }],
       "topTitle": "巅峰榜·欧美",
       "type": 0
     }], [{
       "id": 201,
       "listenCount": 185457,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/20150127163830.jpg",
       "songList": [{
         "singername": "袁娅维",
         "songname": "说散就散"
       }, {
         "singername": "于文文",
         "songname": "体面"
       }, {
         "singername": "吴亦凡",
         "songname": "想你"
       }],
       "topTitle": "巅峰榜·MV",
       "type": 0
     }, {
       "id": 52,
       "listenCount": 1347360,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_52_300_212589304.jpg",
       "songList": [{
         "singername": "何佳乐",
         "songname": "十万个自己"
       }, {
         "singername": "贺仙人/王晓夫/St.K4N3",
         "songname": "我爱你 Luv Is Luv"
       }, {
         "singername": "王天放FrankiD/Dragon Pig",
         "songname": "摇响你的Jingle Bells"
       }],
       "topTitle": "巅峰榜·腾讯音乐人原创榜",
       "type": 0
     }, {
       "id": 36,
       "listenCount": 2443320,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_36_300_200525765.jpg",
       "songList": [{
         "singername": "苏悦宁",
         "songname": "红色高跟鞋"
       }, {
         "singername": "陈诗思",
         "songname": "我好想你"
       }, {
         "singername": "胡慧",
         "songname": "分手快乐"
       }],
       "topTitle": "巅峰榜·K歌金曲",
       "type": 0
     }], [, {
       "id": 16,
       "listenCount": 5665860,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_16_300_212808476.jpg",
       "songList": [{
         "singername": "태양 (太阳)",
         "songname": "LOUDER"
       }, {
         "singername": "볼빨간사춘기 (脸红的思春期)",
         "songname": "#첫사랑 (#初恋)"
       }, {
         "singername": "刘宪华 (Henry)",
         "songname": "女儿情"
       }],
       "topTitle": "巅峰榜·韩国",
       "type": 0
     }, {
         "id": 29,
         "listenCount": 2995440,
         "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_29_300_212846661.jpg",
         "songList": [{
           "singername": "GAI/双笙",
           "songname": "都市惊奇夜"
         }, {
           "singername": "赵天宇/周震南",
           "songname": "吸引力法则"
         }, {
           "singername": "熊梓淇",
           "songname": "说爱你"
         }],
         "topTitle": "巅峰榜·影视金曲",
         "type": 0
       }, {
         "id": 17,
         "listenCount": 1624500,
         "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_17_300_212122798.jpg",
         "songList": [{
           "singername": "初音ミク (初音未来)",
           "songname": "Shining Star"
         }, {
           "singername": "GENERATIONS from EXILE TRIBE (放浪新世代 from 放浪一族)",
           "songname": "ALRIGHT! ALRIGHT!"
         }, {
           "singername": "初音ミク (初音未来)",
           "songname": "初梦"
         }],
         "topTitle": "巅峰榜·日本",
         "type": 0
     }], [{
       "id": 4,
       "listenCount": 19800000,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_212846372.jpg",
       "songList": [{
         "singername": "GAI",
         "songname": "沧海一声笑 (Live)"
       }, {
         "singername": "张韶涵",
         "songname": "梦里花 (Live)"
       }, {
         "singername": "GAI/双笙",
         "songname": "都市惊奇夜"
       }],
       "topTitle": "安利XS·巅峰榜·流行指数",
       "type": 0
     }, {
       "id": 26,
       "listenCount": 19600000,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_201635572.jpg",
       "songList": [{
         "singername": "8kids",
         "songname": "In den Sternen"
       }, {
         "singername": "于文文",
         "songname": "体面"
       }, {
         "singername": "袁娅维",
         "songname": "说散就散"
       }],
       "topTitle": "巅峰榜·热歌",
       "type": 0
     }, {
       "id": 27,
       "listenCount": 15200000,
       "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_27_300_212846661.jpg",
       "songList": [{
         "singername": "GAI/双笙",
         "songname": "都市惊奇夜"
       }, {
         "singername": "熊梓淇/李溪芮",
         "songname": "不是冲动"
       }, {
         "singername": "张杰",
         "songname": "爱的传奇"
       }],
       "topTitle": "巅峰榜·新歌",
       "type": 0
     }]

   ]
   return arr
}

// 技师
function getSkillData() {

  var arr = [
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://ojk4698oq.bkt.clouddn.com/skilledt_img_01.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://ojk4698oq.bkt.clouddn.com/skilledt_img_02.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://ojk4698oq.bkt.clouddn.com/skilledt_img_03.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://ojk4698oq.bkt.clouddn.com/skilledt_img_04.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://ojk4698oq.bkt.clouddn.com/skilledt_img_01.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://ojk4698oq.bkt.clouddn.com/skilledt_img_03.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    }

  ]
  return arr
}
//暴露借口
module.exports = {
  getSongList: getSongList,
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,
  getSkillData: getSkillData
}