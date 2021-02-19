<template>
  <div id="demo-vue-native" ref="rect">
    <div>
      <!-- 操作系统平台 -->
      <div v-if="Vue.Native.Platform" class="native-block">
        <label class="vue-native-title">Vue.Native.Platform</label>
        <p>{{ Vue.Native.Platform }}</p>
      </div>

      <!-- 设备名称 -->
      <div v-if="Vue.Native.Device" class="native-block">
        <label class="vue-native-title">Vue.Native.Device</label>
        <p>{{ Vue.Native.Device }}</p>
      </div>

      <!-- API 版本，目前仅限 Android 使用，其它平台返回 null -->
      <div v-if="Vue.Native.Platform === 'android'"  class="native-block">
        <label class="vue-native-title">Vue.Native.APILevel</label>
        <p>{{ Vue.Native.APILevel || 'null' }}</p>
      </div>


      <!-- 窗口宽度 -->
      <div v-if="Vue.Native.Dimensions.window.width" class="native-block">
        <label class="vue-native-title">Vue.Native.Dimensions.window.width</label>
        <p>{{ Vue.Native.Dimensions.window.width }}</p>
      </div>

      <!-- 窗口高度，需要注意的是双平台都是包含状态栏的，而 Android 会从状态栏下方第一个像素开始画 -->
      <div v-if="Vue.Native.Dimensions.window.height" class="native-block">
        <label class="vue-native-title">Vue.Native.Dimensions.window.height</label>
        <p>{{ Vue.Native.Dimensions.window.height }}</p>
      </div>

      <!-- 屏幕宽度 -->
      <div v-if="Vue.Native.Dimensions.screen.width" class="native-block">
        <label class="vue-native-title">Vue.Native.Dimensions.screen.width(Android Only)</label>
        <p>{{ Vue.Native.Dimensions.screen.width }}</p>
      </div>

      <!-- 屏幕高度 -->
      <div v-if="Vue.Native.Dimensions.screen.height" class="native-block">
        <label class="vue-native-title">Vue.Native.Dimensions.screen.height(Android Only)</label>
        <p>{{ Vue.Native.Dimensions.screen.height }}</p>
      </div>

      <!-- 一个像素的 pt 值 -->
      <div v-if="Vue.Native.OnePixel" class="native-block">
        <label class="vue-native-title">Vue.Native.OnePixel</label>
        <p>{{ Vue.Native.OnePixel }}</p>
      </div>

      <!-- 终端传递过来的启动参数 superProps -->
      <div v-if="app" class="native-block">
        <label class="vue-native-title">App.$options.$superProps</label>
        <p>{{ JSON.stringify(app.$options.$superProps) }}</p>
      </div>

      <!-- 测量一个元素尺寸的范例，其实它是 measureInWindow 的封装 -->
      <div v-if="Vue.Native.measureInWindow" class="native-block">
        <label class="vue-native-title">Element.getBoundingClientRect</label>
        <p>{{ rect }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '../../util';

export default {
  data() {
    return {
      app: this.app,
      rect: null,
      Vue,
    };
  },
  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
  },
  async mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
    // ref="rect" 可以移动到任一元素上测试尺寸，除了 measureInWindow 在 android 上拿不到，别的都可以正常获取。
    const rect = await this.$refs.rect.getBoundingClientRect();
    this.rect = `Container rect: ${JSON.stringify(rect)}`;
  },
};
</script>

<style scope>
  #demo-vue-native {
    flex: 1;
    padding: 50px;
    overflow-y: scroll;
  }

  .native-block {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .vue-native-title {
    color: #aaa;
    text-decoration: underline;
    text-decoration-line: underline;
  }

  .event-btn {
    background-color: #40b883;
    flex: 1;
    flex-direction: column;
  }

  .event-btn-result {
    flex: 1;
    flex-direction: column;
  }

  .event-btn .event-btn-text {
    color: white;
  }
</style>
