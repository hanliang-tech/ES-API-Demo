<template>
  <div class="my_container">
      <danmu-view class="danmu" ref="danmu"></danmu-view>
      <div class="video-btn">
          <div class="button" @click="sendText" :focusable=true :focusScale="1.1" :requestFocus='true'><p duplicateParentState>发送文字弹幕</p></div>
          <div class="button" @click="sendImage" :focusable=true :focusScale="1.1"><p duplicateParentState>发送图片弹幕</p></div>
          <div class="button" @click="changeState" :focusable=true :focusScale="1.1"><p duplicateParentState>{{stateText}}</p></div>
      </div>
  </div>
  
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';
import SocketIO from './socketio'

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
        this.$refs.danmu.addDM()

        let sio = new SocketIO();
        Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },

    sendImage(){
        console.log('send image')
    },

    changeState(){
        console.log('change state')
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
    }

    .my_container .danmu{
        width: 1920px;
        height: 1000px;
        background-color: #000;
    }

  .my_container .video-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .my_container .button p {
    color: #000;
  }
</style>
