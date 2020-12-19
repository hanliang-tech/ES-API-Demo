import Vue from 'vue';

/**
 * Capitalize a word
 *
 * @param {string} s The word input
 * @returns string
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

/**
 * Get binding events redirector
 *
 * The function should be calld with `getEventRedirector.call(this, [])`
 * for binding this.
 *
 * @param {string[] | string[][]} events events will be redirect
 * @returns Object
 */
function getEventRedirector(events) {
  const on = {};
  events.forEach((event) => {
    if (Array.isArray(event)) {
      const [exposedEventName, nativeEventName] = event;
      if (Object.prototype.hasOwnProperty.call(this.$listeners, exposedEventName)) {
        on[event] = this[`on${capitalize(nativeEventName)}`];
      }
    } else if (Object.prototype.hasOwnProperty.call(this.$listeners, event)) {
      on[event] = this[`on${capitalize(event)}`];
    }
  });
  return on;
}

function registerVideo() {
  Vue.registerElement('VideoView', {
    component: {
      name: 'VideoView',
    },
  });
  Vue.component('video-view', {
    methods: {
      playOrPause(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'playOrPause', data, (res) => {
          callback(res)
        });
      },
      play(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'play', data, (res) => {
          callback(res)
        });
      },
      pause(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'pause', data, (res) => {
          callback(res)
        });
      },
      reset(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'reset', data, (res) => {
          callback(res)
        });
      },
      resume(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'resume', data, (res) => {
          callback(res)
        });
      },
      seek(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'seek', data, (res) => {
          callback(res)
        });
      },
      release(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'release', data, (res) => {
          callback(res)
        });
      },
      stop(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'stop', data, (res) => {
          callback(res)
        });
      },
      showController(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'showController', data, (res) => {
          callback(res)
        });
      },
      hideController(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'hideController', data, (res) => {
          callback(res)
        });
      },
      sendLeftRightKeyEvent(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'sendLeftRightKeyEvent', [
          data['keyAction'],
          data['keyCode'],
          data['keyRepeat'],
        ], (res) => {
          callback(res)
        });
      },
      isPlay(data, callback) {
        Vue.Native.callUIFunction(this.$refs.videoView, 'isPlay', data, (res) => {
          callback(res)
        });
      },
      onVideoLoad(evt) {
        this.$emit('video-load', evt);
      },
      onVideoEnd(evt) {
        this.$emit('video-end', evt);
      },
      onVideoBufferStart(evt) {
        this.$emit('video-buffer-start', evt);
      },
      onVideoBufferEnd(evt) {
        this.$emit('video-buffer-end', evt);
      },
      onVideoPlay(evt) {
        this.$emit('video-play', evt);
      },
      onVideoPause(evt) {
        this.$emit('video-pause', evt);
      },
    },
    render(h) {
      const on = getEventRedirector.call(this, [
        ['video-load', 'videoLoad'],
        ['video-end', 'videoEnd'],
        ['video-buffer-start', 'videoBufferStart'],
        ['video-buffer-end', 'videoBufferEnd'],
        ['video-play', 'videoPlay'],
        ['video-pause', 'videoPause'],
      ]);
      return h('VideoView',
        {
          on,
          ref: 'videoView',
        }, this.$slots.default
      );
    },
  });
}

export default registerVideo;
