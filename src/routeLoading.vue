<template>
  <div class="container routeLoading">
    <div class="loading">
      <loading-view class="loading-icon" color="#40b883"></loading-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from './util';

export default {
  name: 'App',
  mounted() {
    // 获取初始化参数
    this.app = getApp();
    const init = this.app.$options.$superProps.init
    // const init = JSON.stringify({ url: '/info', query: { id: 23287, title: '我的影子在奔跑', src: 'https://ft-oss.fangtangtv.com/ssp/license/video2.mp4' }})
    console.log('init------', init)
    if (init) {
      const params = JSON.parse(init)
      if (params.url) {
        if (params.query) {
          this.$router.push({ path: params.url, query: params.query });
        } else {
          this.$router.push(params.url);
        }
      }
    } else {
      this.$router.push('/menu');
    }
  },
};
</script>

<style scoped>
  .routeLoading .loading {
    position: absolute;
    width: 1920px;
    height: 1080px;
    z-index: 2;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .routeLoading .loading .loading-icon {
    width: 100px;
    height: 100px;
  }
</style>
