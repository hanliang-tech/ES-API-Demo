<template>
  <div class='container'>
      <!-- 视频组件 -->
    <div>
      <video-view class='video' src="http://ft-oss.fangtangtv.com/ssp/license/video6.mp4"/>
    <div v-show="videoLoading" class="loading">
        <loading-view class="loading-icon" color="#ff6f2e"></loading-view>
      </div>
  </div>
    </div>
    
</template>


<script>
export default {
  data(){
    return{
      videoLoading=true
    }
  }
}
</script>

<style scoped>

.container {
 width: 1920;
 height:1080;
 background-color: dimgray;
 display:flex;
 flex-direction:row; 
 justify-content:center;
}

.container .video {
  width:1280; 
  height:720;
  background-color: black;
}

.container .loading{
  position: absolute;
  width:1280; 
  height:720;
}

</style>