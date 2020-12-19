import Vue from 'vue';

function registerTextView() {
  Vue.registerElement('TextView', {
    component: {
      name: 'TextView',
    },
  });
  Vue.component('text-view',{
    render(h) {
      return h('TextView',
        {
          ref: 'TextView',
        }, this.$slots.default
      );
    },
  });
}

export default registerTextView;
