<template>
  <div class='container videoContainer'>
      <!-- 视频组件 -->
    <div class="video-wrap">
      <video-view class='video' src="http://ft-oss.fangtangtv.com/ssp/license/video6.mp4" ref="video" :controls="true" :progressUpdateInterval=1000
      @video-load='onVideoLoaded' @video-buffer-start='onVideoBufferStart' @video-buffer-end="onVideoBufferEnd" @video-play="onVideoPlay" @video-pause="onVideoPause" @video-progress-change="onVideoProgressChange"/>
      <div v-show="videoLoading" class="loading">
        <loading-view class="loading-icon" color="#ff6f2e"></loading-view>
      </div>
    </div>
    <div class="video-btn">
      <div class="btn-item" @click="play" :focusable=true :focusScale="1.1"><p>{{playPauseText}}</p></div>
      <div class="btn-item" @click="showController" :focusable=true :focusScale="1.1"><p>显示进度条</p></div>
      <div class="btn-item" @click="forwardThenSeconds" :focusable=true :focusScale="1.1"><p>快进20秒</p></div>
    </div>
  </div>

</template>


<script>
import Vue from 'vue';
import { getApp } from '@/util';
export default {
  data() {
    return {
      playPauseText: '暂停',
      videoLoading: true,
    };
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },
  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
    play() {
      this.$refs.video.playOrPause();
      this.updateStateText()
    },
    updateStateText(){
      setTimeout(()=>{
        this.$refs.video.isPlay(play=>{
          console.log('isplay', play)
          this.playPauseText = play? '暂停' : '播放';
        })
      }, 50)
    },

    onVideoLoaded(){
      this.hideLoading()
      console.log('加载成功...');
    },

    onVideoPlay(){
      this.hideLoading()
      console.log('播放...');
    },

    onVideoPause(){
      console.log('暂停...');
    },

    onVideoProgressChange(e){
      console.log('aaaa', e);
      console.log('onVideoProgressChange position:' + e.position + ', duration:' + e.duration);
    },

    onVideoBufferStart(){
      this.showLoading()
      console.log('开始缓冲...');
    },

    onVideoBufferEnd(){
      this.hideLoading()
      console.log('结束缓冲...');
    },

    showLoading(){
      this.videoLoading = true;
    },

    hideLoading(){
      this.videoLoading = false;
    },

    showController() {
      this.$refs.video.showController()
    },

    forwardThenSeconds(){
      this.$refs.video.getCurrentPosition(position => {
        console.log('getCurrentPosition', position)
        this.$refs.video.seek(position + 20 * 1000)
        this.$refs.video.play()
      })
    }
  },
};
</script>

<style scoped>

  .videoContainer {
    width: 1920px;
    height:1080px;
    background-color: dimgray;
    display:flex;
    justify-content:center;
    align-items: center;
  }
  .videoContainer .video-wrap {
    width:1280px;
    height:720px;
    background-color: black;
  }
  .videoContainer .video {
    width:1280px;
    height:720px;
  }
  .videoContainer .loading {
    position: absolute;
    width:1280px;
    height:720px;
    display:flex;
    justify-content:center;
    align-items: center;
  }
  .videoContainer .loading .loading-icon{
    position: absolute;
    width:100px;
    height:100px;
  }
  .videoContainer .video-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .videoContainer .video-btn .btn-item {
    margin: 10px;
    width: 100px;
    height: 50px;
    background-color: darkorange;
    border-radius: 10px;
  }
  .videoContainer .video-btn .btn-item p {
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }
  .videoContainer .state-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .videoContainer .state-info p {
    font-size: 15px;
    color: #fff;
  }

</style>
