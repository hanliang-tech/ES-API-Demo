<template>
  <div class="container" style="width:1920px; height:1080px; display:flex; flex-direction:row; justify-content:center; align-items:center">
      <!-- content: 二维码要显示的内容 -->
    <qr-view style="width:200px; height:200px;" content="http://www.xxxx.com/"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';

export default {
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },
  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
  }
}
</script>
