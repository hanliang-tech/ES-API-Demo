<template>


  <div class="loadingView">
    <loading-view style="width: 100px;height: 100px;"/>
    <loading-view color="#0000FF" style="width: 120px;height: 120px;" />
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '../../util';
export default {
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


  .loadingView{
    width: 1920px;
    height: 1080px;
    background-color: green;
    padding: 50px;
    align-items: center;
    justify-items: center;
    align-content: center;
    flex-direction: row;
  }

</style>
