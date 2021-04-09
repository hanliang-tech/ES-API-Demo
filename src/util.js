let cachedApp;

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
};
