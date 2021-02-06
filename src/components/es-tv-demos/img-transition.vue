<template>
  <div class="transitionContainer">
    <!-- transitionTime: 设置切换的过渡时间 -->
    <img-transition ref="bg" style="width:1920px; height:1080px;" :transitionTime=1000 />

    <div class="control-btn">
      <div class="btn-item" @click="changeNextImage" :focusable=true :focusScale="1.2" :requestFocus=true ><p>显示图片</p></div>
      <div class="btn-item" @click="changeNextColor" :focusable=true :focusScale="1.2"><p>显示颜色</p></div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';

let index = 0;
let isIntercept=false
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

    this.changeNextImage()

    setInterval(() => {
      if(!isIntercept){
        if (Math.random() * 10 > 5) {
          this.changeNextImage()
        } else {
          this.changeNextColor()
        }
      }
      isIntercept = false
    }, 3000);
  },

  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },

    changeNextImage(){
      isIntercept = true
      // setNextImage: 过渡到图片
      this.$refs.bg.setNextImage(this.images[++index % this.images.length]);
    },
    changeNextColor(){
      isIntercept = true
      // setNextImage: 过渡到颜色
      this.$refs.bg.setNextColor(this.colors[++index % this.colors.length]);
    }
  },
};
</script>

<style>

.transitionContainer .control-btn {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.transitionContainer .control-btn .btn-item {
  margin: 20px;
  width: 100px;
  height: 50px;
  background-color: darkorange;
  border-radius: 10px;
}

.transitionContainer .control-btn .btn-item p {
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 50px;
}

</style>
