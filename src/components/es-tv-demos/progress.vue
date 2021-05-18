<template>


  <div class="progress" :clipChildren="false">

    <seek-bar
      class="column_player_progress"
      :barHeight="10"
      :thumbWidth="45"
      :thumbHeight="45"
      backgroundColor="#999999"
      progressColor="#00AA00"
      thumbColor="#FF4081"
      :progress="50" :maxProgress="100"/>

  </div>
</template>
<script>
import Vue from 'vue';
import { getApp } from '@/util';
import native from '@/native';

export default {
  data() {
    return {
    };
  },
  methods: {
    focusChange(e) {
      console.log(`seekBar focusChange isFocused: ${e.isFocused}`);
    },
    seekChange(e) {
      console.log(`zhaopeng onSeekChange fromUser:${e.fromUser},progress:${e.progress}`);
    },
    backPress() {
      native.closePage()
    },
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },

};
</script>

<style>


  .progress{
    width: 1920px;
    height: 1080px;
    background-color: black;
    padding: 50px;
    justify-content: center;
    align-items: center;
  }

  .progress .column_player_progress {
    margin-top: 34px;
    height: 20px;
    width: 300px;
    background-color: transparent;
  }

</style>
