let cachedApp;
// 监听按键key值
const keyDown = {
  up: 19,
  down: 20,
  left: 21,
  right: 22,
  ok: 23,
  menu: 82,
}

function setApp(app) {
  cachedApp = app;
}

function getApp() {
  return cachedApp;
}

function warn(...context) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  return console.warn(...context);
}

/**
 * Better function checking
 */
function isFunction(func) {
  return Object.prototype.toString.call(func) === '[object Function]';
}


export {
  setApp,
  getApp,
  warn,
  isFunction,
  keyDown,
};
