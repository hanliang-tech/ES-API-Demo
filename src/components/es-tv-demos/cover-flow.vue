<template>
  <div class='container coverflow'>
    <cover-flow class="cf_vertical" :focusable="false" :clipChildren="false" :zoomInValue="1.3" :autoScrollInterval="0" :isVertical="true">
      <div class="scrollChild" :focusable="false" >
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic3.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic3.png">
      </div>
    </cover-flow>

    <cover-flow class="cf_horizontal" :focusable="false" :clipChildren="false" :zoomInValue="1.3" :autoScrollInterval="5000" >
      <div class="scrollChild" :focusable="false" :clipChildren="false" >
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img :focusable="false" src="http://test-mp.hiliad.com/static/taobao/pic3.png">
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

.coverflow{
  flex-direction: row;
}

.cf_vertical {
  width: 330px;
  height: 800px;
  left: 100px;
}

.cf_vertical .scrollChild {
  height: 1080px;
  display: flex;
  flex-direction: column;
  padding: 50px;
}

.cf_horizontal {
  width: 800px;
  height: 330px;
  left: 500px;
}
.cf_horizontal .scrollChild {
  width: 1080px;
  display: flex;
  flex-direction: row;
  padding: 50px;
}

.coverflow img {
  width: 230px;
  height: 230px;
}
</style>
