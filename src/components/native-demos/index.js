import Vue from 'vue';
import demoVueNative from './demo-vue-native.vue';
import demoAnimation from './demo-animation.vue';
import demoDialog from './demo-dialog.vue';
import demoSwiper from './demo-swiper.vue';

const demos = {};

if (Vue.Native) {
  Object.assign(demos, {
    demoVueNative: {
      name: 'Vue.Native 属性',
      component: demoVueNative,
    },
    demoAnimation: {
      name: 'animation 组件',
      component: demoAnimation,
    },
    demoModal: {
      name: 'dialog 组件',
      component: demoDialog,
    },
    demoSwiper: {
      name: 'swiper 组件',
      component: demoSwiper,
    },
  });
}

export default demos;
