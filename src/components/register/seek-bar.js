import Vue from 'vue';

function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

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

function registerSeekBar() {
  Vue.registerElement('SeekBar', {
    component: {
      name: 'SeekBar',
      processEventData(event, nativeEventName, nativeEventParams) {
        console.log(`processEventData nativeEventName:${nativeEventName}`);
        switch (nativeEventName) {
          case 'onFocus':
            event.isFocused = nativeEventParams.isFocused;
            break;
          case 'onSeekBarChange':
            event.fromUser = nativeEventParams.fromUser;
            event.progress = nativeEventParams.progress;
            break;
          default:
            break;
        }
        return event;
      },
    },
  });

  Vue.component('seek-bar', {

    methods: {
      onFocusChange(evt) {
        this.$emit('focus', evt);
      },
      onSeekBarChange(evt) {
        this.$emit('seek-change', evt);
      },

    },

    render(h) {
      const on = getEventRedirector.call(this, [
        ['focus', 'focusChange'],
        ['seek-change', 'seekBarChange'],
      ]);
      return h('SeekBar',
        {
          on,
          ref: 'SeekBar',
        }, this.$slots.default);
    },
  });
}

export default registerSeekBar;
