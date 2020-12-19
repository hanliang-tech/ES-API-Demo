import Vue from 'vue';

function registerScrollView() {
  Vue.registerElement('ScrollView', {
    component: {
      name: 'ScrollView',
    },
  });
  Vue.component('scroll-view',{
    methods: {
      scrollTo(x, y, animation) {
        Vue.Native.callUIFunction(this.$refs.ScrollView, 'scrollTo', [x, y, animation]);
      },
    },
    render(h) {
      return h('ScrollView',
        {
          ref: 'ScrollView',
        }, this.$slots.default
      );
    },
  });
}

export default registerScrollView;
