<template>


  <div class="progress" :clipChildren="false">

    <seek-bar
      class="column_player_progress"
      :maxProgress="100"
      :focusable="true"
      :progress="50"
      name="progress"
      @focus="focusChange"
      @seek-change="seekChange"
      cornerRadius="20"
      secondColor="#00000000"
      thumbColor="#121212"
      startColor="#FFFF3823"
      endColor="#FFDCDCDC"/>

  </div>
</template>
<script>
import Vue from 'vue';
import { getApp } from '../../util';

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
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
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
    background-color: green;
    padding: 50px;
    align-items: center;
    justify-items: center;
    align-content: center;
    flex-direction: row;
  }

  .progress .column_player_progress {
    margin-top: 34px;
    height: 20px;
    width: 300px;
    background-color: transparent;
  }

</style>
