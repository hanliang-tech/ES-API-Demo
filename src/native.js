import Vue from 'vue';

const callNativeWithPromise = msg => {
  return Vue.Native.callNativeWithPromise('MiniModule', 'executeWithPromise', msg);
}

const callNative = msg => {
  return Vue.Native.callNative('MiniModule', 'execute', msg);
}

/**
 * 定位焦点
 * $refs：this.$refs.view 需要定位焦点标签的$refs对象
 * */
const requestFocus = $refs => {
  Vue.Native.callUIFunction($refs, 'requestFocus');
}

/**
 * 清空上一次记忆焦点
 * $refs：this.$refs.view ul的$refs对象
 * */
const clearFocusMemory = $refs => {
  Vue.Native.callUIFunction($refs, 'clearFocusMemory');
}

/**
 * 预设焦点：适用于ul列表
 * $refs：this.$refs.view ul的$refs对象
 * index：第几个子标签
 * */
const setSelectChildPosition = ($refs, index) => {
  Vue.Native.callUIFunction($refs, 'setSelectChildPosition', [index]);
}

/**
 * 获取设备信息
 * getDeviceInfo().then(res => {})
 * */
const getDeviceInfo = () => {
  return Vue.Native.callNativeWithPromise('MiniModule', 'executeWithPromise', { action: '__AC_GET_DEVICE_INFO__' });
}

/**
 * 系统TOAST提示（各品牌电视的提示样式不同，介意的可自己做）
 * msg：提示文字
 * long: 显示时间长短，true为7秒，false为4秒，默认false
 * */
const TOAST = (msg, long) => {
  long = long || false
  Vue.Native.callNative('MiniModule', 'execute', { action: '__AC_TOAST__', text: msg, long });
}

/**
 * 打开新页面
 * url：页面路径
 * query：页面参数
 * clearTask：是否关闭其他页面，可用于返回首页
 * background: 新页面背景色例如 #000000
 * */
const newTab = (url, query, background, clearTask) => {
  clearTask = clearTask || false;
  background = background || '#000000'
  Vue.Native.callNative('MiniModule', 'execute', {action: '__AC_NEW_TAB__', data: JSON.stringify({ url, query }), background: background, clearTask: clearTask});
}

/**
 * 打开新页面
 * url：页面路径
 * query：页面参数
 * max：最多数量
 * background: 新页面背景色例如 #000000
 * */
const newTabMax = (url, query, num, background) => {
  background = background || '#000000'
  Vue.Native.callNative('MiniModule', 'execute', {action: '__AC_NEW_TAB__', data: JSON.stringify({ url, query }), background: background, flag: url, max: num});
}

/**
 * 打开新扩展屏小程序
 * packageName：包名
 * params：启动参数
 * background: 新页面背景色例如 #000000
 * splashAd: 是否显示广告 默认为true显示广告
 * */
const newApp = (packageName, params, background, splashAd) => {
  background = background || '#000000'
  splashAd = splashAd || true
  Vue.Native.callNative('MiniModule', 'execute', { action: '__AC_NEW_TAB__', data: params, background, espkg: packageName, splashAd });
}

/**
 * 关闭当前页面
 * */
const closePage = () => {
  Vue.Native.callNative('MiniModule', 'execute', {action: '__AC_FINISH__'});
}

/**
 * 调起支付：用于单应用集成第三方支付sdk
 * */
const pay = data => {
  return Vue.Native.callNativeWithPromise('MiniModule', 'pay', data);
}

/**
 * 埋点
 * name: 事件名称
 * data: 事件参数
 * */
const eventTack = (name, data) => {
  Vue.Native.callNative('MiniModule', 'eventTack', { name, data });
}

/**
 * 向投屏手机端发消息
 * action: 消息名
 * data: 消息参数
 * */
const sendToMobile = (action, data) => {
  const params = data || {};
  params.action = action;
  Vue.Native.callNative('MiniModule', 'execute', params);
}

export default {
  callNativeWithPromise,
  callNative,
  requestFocus,
  clearFocusMemory,
  setSelectChildPosition,
  getDeviceInfo,
  TOAST,
  newTab,
  newTabMax,
  newApp,
  closePage,
  pay,
  eventTack,
  sendToMobile,
};
