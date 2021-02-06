<template>
  <div id="demo-img">
    <div id="demo-img-container">
      <label>Contain:</label>
      <img src="http://zxpic.imtt.qq.com/zxpic_imtt/2018/06/08/2000/originalimage/200721_3738332814_3_540_364.jpg" class="image contain" />
      <label>Cover:</label>
      <img src="http://zxpic.imtt.qq.com/zxpic_imtt/2018/06/08/2000/originalimage/200721_3738332814_3_540_364.jpg" class="image cover" />
      <label>Center:</label>
      <img src="http://zxpic.imtt.qq.com/zxpic_imtt/2018/06/08/2000/originalimage/200721_3738332814_3_540_364.jpg" class="image center" />
    </div>
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

  data() {
    return {};
  },
};
</script>

<style scope>
#demo-img {
  overflow-y: scroll;
  flex: 1;
  padding: 50px;
}

#demo-img #demo-img-container {
  display: flex;
  flex-direction: column;
}

#demo-img .image {
  width: 300px;
  height: 180px;
  margin: 30px;
  border-width: 1px;
  border-color: #40b883;
}

#demo-img .contain {
  resize-mode: contain;
}

#demo-img .cover {
  resize-mode: cover;
}

#demo-img .center {
  resize-mode: center;
}
</style>
