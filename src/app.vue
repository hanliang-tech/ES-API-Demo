<template>
  <div id="root">
    <!--<label class="title" @click="remoteDebug">{{ subtitle }}</label>-->
    <keep-alive>
      <router-view class="feature-content"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue';
import backButtonImg from './back-icon.png';

let DEBUG_SUBTITLE = '';
if (Vue.Native) {
  DEBUG_SUBTITLE = '本地调试';
}

export default {
  name: 'App',
  watch: {
    $route(to) {
      if (to.name === undefined) {
        this.subtitle = DEBUG_SUBTITLE;
        return;
      }
      this.subtitle = to.name;
    },
  },
  data() {
    return {
      imgs: {
        backButtonImg,
      },
      subtitle: DEBUG_SUBTITLE,
      DEBUG_SUBTITLE,
    };
  },

  mounted() {
    Vue.Native.callNative('FocusModule', 'setDefaultFocusBorderEnable', true);
    Vue.Native.callNative('FocusModule', 'setDefaultFocusInnerBorderEnable', false);
  },
  created() {
    console.log('page------------------index');
  },
  methods: {
    goToHome() {
      this.$router.back();
    },
    remoteDebug() {
      if (this.subtitle !== DEBUG_SUBTITLE || !Vue.Native) {
        return;
      }
      Vue.Native.callNative('TestModule', 'debug', this.$options.parent.$options.rootViewId);
    },
  },
};
</script>

<style scoped>
  #root {
    flex: 1;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    /*padding: 50px;*/
  }
  .title {
    font-size: 20px;
    line-height: 60px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
    background-color: #40b883;
    color: #ffffff;
  }
</style>
