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

function registerAudioView() {
  Vue.registerElement('AudioView', {
    component: {
      name: 'AudioView',
      processEventData(event, nativeEventName, nativeEventParams) {
        switch (nativeEventName) {
          case 'onLoaded':
            event.length = Math.ceil(nativeEventParams.length / 1000);
            break;
          case 'onProgress':
            event.length = Math.ceil(nativeEventParams.length / 1000);
            event.current = Math.ceil(nativeEventParams.current / 1000);
            break;
          default:
            break;
        }
        return event;
      },
    },
  });
  Vue.component('audio',{
    methods:{
      play(data, callback) {
        Vue.Native.callUIFunction(this.$refs.AudioView, 'play', data, (res) => {
          callback(res)
        });
      },
      pause(data, callback) {
        Vue.Native.callUIFunction(this.$refs.AudioView, 'pause', data, (res) => {
          callback(res)
        });
      },
      stop(data, callback) {
        Vue.Native.callUIFunction(this.$refs.AudioView, 'stop', data, (res) => {
          callback(res)
        });
      },
      seek(data, callback) {
        Vue.Native.callUIFunction(this.$refs.AudioView, 'seek', [data], (res) => {
          callback(res)
        });
      },
      release(data, callback) {
        Vue.Native.callUIFunction(this.$refs.AudioView, 'release', [data], (res) => {
          callback(res)
        });
      },
      onProgress(evt) {
        this.$emit('audio-progress', evt);
      },
      onPlaying(evt) {
        this.$emit('audio-playing', evt);
      },
      onPause(evt) {
        this.$emit('audio-pause', evt);
      },
      onLoaded(evt) {
        this.$emit('audio-loaded', evt);
      },
      onEnded(evt) {
        this.$emit('audio-ended', evt);
      },
      onError(evt) {
        this.$emit('audio-error', evt);
      },
    },
    render(h) {
      const on = getEventRedirector.call(this, [
        ['audio-progress', 'progress'],
        ['audio-playing', 'playing'],
        ['audio-pause', 'pause'],
        ['audio-loaded', 'loaded'],
        ['audio-ended', 'ended'],
        ['audio-error', 'error'],
      ]);
      return h('AudioView',
        {
          on,
          ref: 'AudioView',
        }, this.$slots.default
      );
    },
  });
}

export default registerAudioView;
