<template>
  <div class="container" style="width:1920px; height:1080px; display:flex; flex-direction:row; justify-content:center; align-items:center">
    <audio :autoPlay="true"
           src="http://test-mp.hiliad.com/static/music/data/qlx.mp3"
           :onPlayProgress="true"
           :onPlayStart="true"
           :onPlayComplete="true"
           :onPlayPause="true"
           :onPlayResume="true"
           :setOnPlayError="true"
           @audio-progress="onProgress"
           @audio-loaded="onLoaded"
           @audio-ended="onEnded"
           @audio-pause="onPause"
           @audio-playing="onPlaying"
           @audio-error="onError"
           ref="audioView"
    />
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
      this.$refs.audioView.stop()
      native.closePage()
    },
    onLoaded(e) {
      console.log('onLoaded', e)
      this.totalTime = e.length
    },
    onEnded(e) {
      console.log('onEnded', e)
    },
    onProgress(e) {
      console.log('onProgress', e)
      this.playTime = e.current
    },
    onPause(e) {
      console.log('onEnded', e)
    },
    onPlaying(e) {
      console.log('onEnded', e)
    },
    onError(e) {
      console.log('onEnded', e)
    },
  }
}
</script>
