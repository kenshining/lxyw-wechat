/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js');

/**
 * Baidu API 模块
 * @type {Object}
 */
const baidu = require('./utils/baidu.js');

App({
/**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
*/
  data: {
    name: '乐享御味',
    version: '0.0.1',
    currentCity: '北京',
    user:{
      openId:'',
      userIcon:'',
      nickName:''
    }
  },
  /**
   * WeChat API
   */
  wechat: wechat,
  /**
   * Baidu API
   */
  baidu: baidu,
  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取用户授权

    //获取用户城市
    wechat
      .getLocation()
      .then(res => {
        //获取所在城市
        const { latitude, longitude } = res
        return baidu.getCityName(latitude, longitude)
      }).then(name =>{
        //全局变量赋值城市
        this.data.currentCity = name.replace('市', '')
        console.log("City:" + this.data.currentCity);
      }).catch(err => {
        this.data.currentCity = '未知';
        console.error(err);
      });
  }
})