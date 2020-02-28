// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : 'msh',
   
    msg:0,
    pic:""
  },
  clickMe: function(){
    this.setData({ msg: this.data.msg+1 })
  },
  clickMe2: function () {
    this.setData({ msg: this.data.msg -1 })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    
    wx.getImageInfo({
      src: 'http://121.199.74.37:8888/group1/M00/00/00/ecdKJV4P_dKAdpz0AABxwj5WybU075.png',
          success(res) {
            console.log(res.width)
            console.log(res.height)
          }
    }), wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ['http://121.199.74.37:8888/group1/M00/00/00/ecdKJV4P_dKAdpz0AABxwj5WybU075.png'] // 需要预览的图片http链接列表
    })
        
     
  }
})