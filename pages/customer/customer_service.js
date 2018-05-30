// pages/customer/customer_service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderSearch:''
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
  
  },

  sanOrder:function(){
    /**扫码不必指定类型，即可自动识别 */
    wx.scanCode({
      onlyFromCamera:false,
      success:(res) => {
        console.log(res);
        //将扫码结果赋予文本框
        this.setData({
          //绑定变量同步显示内容
          orderSearch: res.result
          //TODO 执行订单查询动作
        });
      },
      fail:(res) => {
        console.log(res);
        console.log(JSON.stringify(res));
      }
    });
  }
})