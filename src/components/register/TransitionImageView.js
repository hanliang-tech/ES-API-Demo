import Vue from 'vue';

function registerImgTransitionView() {
  Vue.registerElement('TransitionImage', {
    component: {
      name: 'TransitionImage',
    },
  });
  Vue.component('img-transition',{
    methods: {
      setNextImage(data, callback) {
        Vue.Native.callUIFunction(this.$refs.TransitionImage, 'setNextImage', [data], (res) => {
          callback(res)
        });
      },

      setNextColor(data, callback) {
        Vue.Native.callUIFunction(this.$refs.TransitionImage, 'setNextColor', [data], (res) => {
          callback(res)
        });
      },
    },
    render(h) {
      return h('TransitionImage',
        {
          ref: 'TransitionImage',
        }, this.$slots.default
      );
    },
  });
}

export default registerImgTransitionView;
