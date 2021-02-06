import Vue from 'vue';

function registerQrView() {
  Vue.registerElement('QrView', {
    component: {
      name: 'QrView',
    },
  });
  Vue.component('qr-view',{
    render(h) {
      return h('QrView',
        {
          ref: 'QrView',
        }, this.$slots.default
      );
    },
  });
}

export default registerQrView;
