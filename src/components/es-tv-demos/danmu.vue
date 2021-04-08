<template>
  <div class="my_container">
      <danmu-view class="danmu" ref="danmu"></danmu-view>
      <div class="btn-group">
          <div class="button" @click="sendText" :focusable=true :focusScale="1.1" :requestFocus='true'><p duplicateParentState>普通文字弹幕</p></div>
          <div class="button" @click="sendTextDecorator" :focusable=true :focusScale="1.1" ><p duplicateParentState>文字修饰弹幕</p></div>
          <div class="button" @click="sendImage" :focusable=true :focusScale="1.1"><p duplicateParentState>图片弹幕</p></div>
          <div class="button" @click="changeState" :focusable=true :focusScale="1.1"><p duplicateParentState>{{stateText}}</p></div>
      </div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';

let pause = false;

export default {
  data(){
      return {
          stateText:'暂停'
      }
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },
  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },

    sendText(){
        this.$refs.danmu.addDM({
            text:'文本弹幕',
            textColor: '#000000',
        })
    },

    sendTextDecorator(){
        this.$refs.danmu.addDM({
            text:'文本弹幕',

            textSize: 22,
            textColor: '#FFFF00',

            backgroundColor: '#55000000',
            backgroundRadius: 25,

            borderColor: "#D2C0AB",
            borderRadius: 25,
            borderWidth: 2,
        })
    },

    sendImage(){
        this.$refs.danmu.addDM({
            text:'文本弹幕',

            textSize: 22,
            textColor: '#FFFF00',

            backgroundColor: '#55000000',
            backgroundRadius: 25,

            borderColor: "#D2C0AB",
            borderRadius: 25,
            borderWidth: 2,

            imageUri: "http://test-mp.hiliad.com/static/images/speaker_xm.png",
        })
    },

    changeState(){
        if(pause){
            this.$refs.danmu.resume()
        }else{
            this.$refs.danmu.pause()
        }
        this.stateText = pause ? '暂停' : '恢复';
        pause = !pause;
    },
  }
}
</script>

<style scoped>
    .my_container {
        width: 1920px;
        height: 1080px;
        display:flex;
        justify-content:center;
        align-items: center;
        background-color: dimgrey;
    }

    .my_container .danmu{
        width: 1920px;
        height: 1000px;
    }

  .my_container .btn-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .my_container .button p {
    color: #000;
  }
</style>
