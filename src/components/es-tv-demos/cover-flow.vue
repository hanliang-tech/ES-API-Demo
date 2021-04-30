<template>
  <div class='container coverflow'>
    <cover-flow id="scrollView" :focusable="false" :clipChildren="false" :zoomInValue="1.3" orientation="vertical">
      <div id="scrollChild" :focusable="false" :clipChildren="false" >
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic3.png">
      </div>
    </cover-flow>
  </div>

</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';
import native from '@/native';
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
      native.closePage()
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

.coverflow {
  position: absolute;
  top: 450px;
  left: 24px;
  width: 610px;
}
#scrollView {
  width: 330px;
  height: 610px;
}
#scrollView #scrollChild {
  width: 330px;
  height: 1920px;
  display: flex;
  flex-direction: column;
  padding: 50px;
}
.coverflow img {
  width: 230px;
  height: 230px;
}

</style>
