// pages/products/products_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    ww:0,//页面屏幕宽度和高度
    hh:0,
    animation_car:{},//加入购物车动画对象
    carts: [],// 购物车列表
    products: [
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle:' 产地：印尼 规格：650ml * 24瓶/箱'},
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle: ' 产地：印尼 规格：650ml * 24瓶/箱' },
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle: ' 产地：印尼 规格：650ml * 24瓶/箱' },
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle: ' 产地：印尼 规格：650ml * 24瓶/箱' },
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle: ' 产地：印尼 规格：650ml * 24瓶/箱' },
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle:' 产地：印尼 规格：650ml * 24瓶/箱'},
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle: ' 产地：印尼 规格：650ml * 24瓶/箱' },
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle: ' 产地：印尼 规格：650ml * 24瓶/箱' },
      { img: '/themes/default/imgs/lankele.jpg', title: '印尼网红蓝可乐，夏季最好卖的货，全现货发售中。', subtitle: ' 产地：印尼 规格：650ml * 24瓶/箱' }
    ]
  
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
    let that = this;
    //获取页面信息
    wx.getSystemInfo({
      success: function(res) {
        wx.setStorageSync("systemInfo", res);
        that.setData({
          ww : res.windowWidth,
          hh : res.windowHeight
        });
      }
    });
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

  addToCar: function (event){
    
  },

  bezier: function (points, times) {

    // 0、以3个控制点为例，点A,B,C,AB上设置点D,BC上设置点E,DE连线上设置点F,则最终的贝塞尔曲线是点F的坐标轨迹。

    // 1、计算相邻控制点间距。

    // 2、根据完成时间,计算每次执行时D在AB方向上移动的距离，E在BC方向上移动的距离。

    // 3、时间每递增100ms，则D,E在指定方向上发生位移, F在DE上的位移则可通过AD/AB = DF/DE得出。

    // 4、根据DE的正余弦值和DE的值计算出F的坐标。

    // 邻控制AB点间距

    var bezier_points = [];

    var points_D = [];

    var points_E = [];

    const DIST_AB = Math.sqrt(Math.pow(points[1]['x'] - points[0]['x'], 2) + Math.pow(points[1]['y'] - points[0]['y'], 2));

    // 邻控制BC点间距

    const DIST_BC = Math.sqrt(Math.pow(points[2]['x'] - points[1]['x'], 2) + Math.pow(points[2]['y'] - points[1]['y'], 2));

    // D每次在AB方向上移动的距离

    const EACH_MOVE_AD = DIST_AB / times;

    // E每次在BC方向上移动的距离 

    const EACH_MOVE_BE = DIST_BC / times;

    // 点AB的正切

    const TAN_AB = (points[1]['y'] - points[0]['y']) / (points[1]['x'] - points[0]['x']);

    // 点BC的正切

    const TAN_BC = (points[2]['y'] - points[1]['y']) / (points[2]['x'] - points[1]['x']);

    // 点AB的弧度值

    const RADIUS_AB = Math.atan(TAN_AB);

    // 点BC的弧度值

    const RADIUS_BC = Math.atan(TAN_BC);

    // 每次执行

    for (var i = 1; i <= times; i++) {

      // AD的距离

      var dist_AD = EACH_MOVE_AD * i;

      // BE的距离

      var dist_BE = EACH_MOVE_BE * i;

      // D点的坐标

      var point_D = {};

      point_D['x'] = dist_AD * Math.cos(RADIUS_AB) + points[0]['x'];

      point_D['y'] = dist_AD * Math.sin(RADIUS_AB) + points[0]['y'];

      points_D.push(point_D);

      // E点的坐标

      var point_E = {};

      point_E['x'] = dist_BE * Math.cos(RADIUS_BC) + points[1]['x'];

      point_E['y'] = dist_BE * Math.sin(RADIUS_BC) + points[1]['y'];

      points_E.push(point_E);

      // 此时线段DE的正切值

      var tan_DE = (point_E['y'] - point_D['y']) / (point_E['x'] - point_D['x']);

      // tan_DE的弧度值

      var radius_DE = Math.atan(tan_DE);

      // 地市DE的间距

      var dist_DE = Math.sqrt(Math.pow((point_E['x'] - point_D['x']), 2) + Math.pow((point_E['y'] - point_D['y']), 2));

      // 此时DF的距离

      var dist_DF = (dist_AD / DIST_AB) * dist_DE;

      // 此时DF点的坐标

      var point_F = {};

      point_F['x'] = dist_DF * Math.cos(radius_DE) + point_D['x'];

      point_F['y'] = dist_DF * Math.sin(radius_DE) + point_D['y'];

      bezier_points.push(point_F);

    }

    return {

      'bezier_points': bezier_points

    };

  }

})