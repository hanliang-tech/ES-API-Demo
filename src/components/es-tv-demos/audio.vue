<template>
  <div class="container" style="width:1920px; height:1080px; display:flex; flex-direction:row; justify-content:center; align-items:center">
    <audio
<!--属性-->
      :autoPlay="false"
      src="http://test-mp.hiliad.com/static/music/data/qlx.mp3"

<!--需要打开如下开关才能收到对应的回调-->
      :onPlayProgress="true"
      :onPlayStart="true"
      :onPlayPause="true"
      :onPlayResume="true"
      :onPlayComplete="true"
      :setOnPlayError="true"/>

<!--方法-->
<!--    $ref.audio.play()-->
<!--    $ref.audio.play(['url'])-->
<!--    $ref.audio.pause()-->
<!--    $ref.audio.seek([100])-->
<!--    $ref.audio.stop()-->
<!--    $ref.audio.release()-->
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';
import native from '@/native';

export default {
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
    this.app.$on('onProgress', this.backPress);
  },
  methods: {
    backPress() {
      native.closePage()
    },
  }
}
</script>
