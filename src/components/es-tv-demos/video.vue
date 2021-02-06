<template>
  <div class='container videoContainer'>
      <!-- 视频组件 -->
    <div class="video-wrap">
      <video-view class='video' src="http://ft-oss.fangtangtv.com/ssp/license/video6.mp4" ref="video" :controls="true" />
      <div v-show="videoLoading" class="loading">
        <loading-view class="loading-icon" color="#ff6f2e"></loading-view>
      </div>
    </div>
    <div class="video-btn">
      <div class="btn-item" @click="play" :focusable=true :focusScale="1.1"><p>播放</p></div>
      <div class="btn-item" @click="pause" :focusable=true :focusScale="1.1"><p>暂停</p></div>
    </div>
  </div>
    
</template>


<script>
export default {
  data() {
    return {
      videoLoading: true,
    }
  },
  methods: {
    play() {
      this.$refs.video.play();
    },
    pause() {
      this.$refs.video.pause();
    },
  },
}
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

</style>
