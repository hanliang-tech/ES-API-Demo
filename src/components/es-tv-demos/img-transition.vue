<template>
  <div class="transitionContainer">
    <!-- transitionTime: 设置切换的过渡时间 -->
    <img-transition ref="bg" style="width:1920px; height:1080px;" :transitionTime=500 />

    <div class="control-btn">
      <div class="button" @click="changeNextImage" :focusable=true :focusScale="1.1" :requestFocus=true ><p duplicateParentState>显示图片</p></div>
      <div class="button" @click="changeNextColor" :focusable=true :focusScale="1.1"><p duplicateParentState>显示颜色</p></div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';
import native from '@/native';

let index = 0;
let isIntercept=false
export default {
  data() {
    return {
      images: [
        'http://fitimg.fangtangtv.com/tab/tab1block1-1bg1.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-2bg1.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-3bg1.jpg',
        'http://fitimg.fangtangtv.com/tab/tab1block1-4bg1.jpg',
      ],
      colors: [
        '#AC78F5',
        -1,
        '#5AF285',
        -16711681,
        '#F5C94D',
        -12303292,
        '#1A99D9',
        -65281,
        '#DB5B3F',
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
      native.closePage()
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
  align-items: center;
  padding: 50px;
  width: 1920px;
}

</style>
