const { exec } = require("@estv/debug-server/utils");

class WebpackLifeWatchPlugin{
    constructor(options){
    	this.options = options || {};
    }
    apply(compiler){
        compiler.hooks.done.tap("WebpackLifeWatchPlugin",compiler => {
            exec('sleep', ['0.5'])
            exec('adb', ['shell', 'am', 'broadcast', '-a', 'com.hili.bct.ACTION.CODE_CHANGED', '-f', '32'])
        });
    }
}
module.exports = WebpackLifeWatchPlugin;
