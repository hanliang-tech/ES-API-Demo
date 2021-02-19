<template>
  <div class="button-demo">
    <label>按钮和状态绑定:</label>
    <button :class="{ 'is-active': isClicked }" :focusable="true" :requestFocus="true"
      class="button-demo-1"
      @click="clickView">
      <span v-if="isClicked" class="button-text">视图已经被点击了，再点一下恢复</span>
      <span v-else class="button-text">视图尚未点击</span>
    </button>
    <img v-show="isClicked" src="http://test-mp.hiliad.com/static/images/WX20201028-180320@2x.png" class="button-demo-1-image" />
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '../../util';
export default {
  methods: {
    clickView() {
      this.isClicked = !this.isClicked;
    },
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },

  data() {
    return {
      isClicked: false,
    };
  },
};
</script>

<style scope>
  .button-demo {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px;
  }

  .button-demo-1 {
    height: 64px;
    width: 240px;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    align-items: center;
  }

  .button-demo-1 .button-text {
    line-height: 56px;
    text-align: center;
  }

  .button-demo-1-image {
    width: 300px;
    height: 300px;
    margin-top: 30px;
  }

  .button-demo-1.is-active {
    background-color: #4068b8;
    border-color: #4068b8;
  }
  .button-demo-1.is-active .button-text {
    color: white;
  }

  .button-demo-1.is-pressing {
    color: white;
    background-color: blue;
  }
</style>
