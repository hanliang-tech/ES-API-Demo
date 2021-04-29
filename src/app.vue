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
    Vue.Native.callNative('DeviceEventModule', 'setListenBackPress', true);
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
    background-color: #fff;
  }
  .button {
    width: 200px;
    margin: 10px;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    focus-background-color: #40b883;
  }
  .button p {
    height: 56px;
    line-height: 56px;
    font-size: 20px;
    color: #40b883;
    text-align: center;
    text-align-vertical: center;
    focus-color: #fff;
  }
</style>
