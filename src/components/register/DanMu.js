import Vue from 'vue';

function registerDanMuView() {
  Vue.registerElement('DanMuView', {
    component: {
      name: 'DanMuView',
    },
  });
  Vue.component('danmu-view',{
    methods: {
      addDM(data, callback) {
        Vue.Native.callUIFunction(this.$refs.danmu, 'addDM', data, (res) => {
          callback(res)
        });
      },
      pause(callback) {
        Vue.Native.callUIFunction(this.$refs.danmu, 'pause', [], (res) => {
          callback(res)
        });
      },
      resume(callback) {
        Vue.Native.callUIFunction(this.$refs.danmu, 'resume', [], (res) => {
          callback(res)
        });
      },
      show(callback) {
        Vue.Native.callUIFunction(this.$refs.danmu, 'show', [], (res) => {
          callback(res)
        });
      },
      hide(callback) {
        Vue.Native.callUIFunction(this.$refs.danmu, 'hide', [], (res) => {
          callback(res)
        });
      },
      release(data, callback) {
        Vue.Native.callUIFunction(this.$refs.danmu, 'release', [data], (res) => {
          callback(res)
        });
      },
    },
    render(h) {
      return h('DanMuView',
        {
          ref: 'danmu',
        }, this.$slots.default
      );
    },
  });
}

export default registerDanMuView;
