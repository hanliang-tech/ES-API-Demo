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
      }
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
