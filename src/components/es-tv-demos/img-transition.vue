<template>
  <div id="root">
    <!-- transitionTime: 设置切换的过渡时间 -->
    <img-transition ref="bg" style="width:1920px; height:1080px;" :transitionTime=1000 />
  </div>
</template>


<script>
import Vue from 'vue';
import { getApp } from '@/util';

var index = 0;
export default {
  data() {
    return {
      images: [
        'http://fitimg.fangtangtv.com/tab/tab1block1-1bg.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-2bg.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-3bg.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-4bg.jpg',
      ],
      colors: [
        -1,
        -16711681,
        -12303292,
        -65281,
      ]
    };

  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);

    this.$refs.bg.setNextImage(this.images[0]);
    setInterval(() => {
      if (Math.random() * 10 > 5) {
        // setNextImage: 过渡到图片
        this.$refs.bg.setNextImage(this.images[++index % this.images.length]);
      } else {
        // setNextImage: 过渡到颜色
        this.$refs.bg.setNextColor(this.colors[++index % this.colors.length]);
      }

    }, 3000);
  },

  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
  },
};
</script>
