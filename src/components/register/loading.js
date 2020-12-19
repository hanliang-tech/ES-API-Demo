import Vue from 'vue';

function registerLoadingView() {
  Vue.registerElement('LoadingView', {
    component: {
      name: 'LoadingView',
    },
  });
  Vue.component('loading-view',{
    render(h) {
      return h('LoadingView',
        {
          ref: 'LoadingView',
        }, this.$slots.default
      );
    },
  });
}

export default registerLoadingView;
