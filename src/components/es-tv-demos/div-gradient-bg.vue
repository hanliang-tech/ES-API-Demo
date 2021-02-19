<template>


  <div class="divg">
    <div  :enableFocusBorder="true" :focusable="true" style="width: 300px;height: 200px; background-color: transparent "
          :gradientBackground="gradientBackground">
    </div>
    <!-----cornerRadius:10 --->
    <!-----top-left, top-right, bottom-right, bottom-left --->
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '../../util';

export default {
  data() {
    return {
      gradientBackground: {
        type: 0,
        shape: 0,
        colors: ['#40b883', '#4068b8'],
        cornerRadii4: [0, 5, 20, 0],
      },
    };
  },
  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },

};
</script>
<style>


  .divg{
    width: 1920px;
    height: 1080px;
    padding: 50px;
    justify-content: center;
    align-items: center;
  }

</style>
