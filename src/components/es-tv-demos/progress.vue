<template>


  <div class="progress" :clipChildren="false">

    <seek-bar
      class="column_player_progress"
      :barHeight="6"
      :thumbWidth="35"
      :thumbHeight="35"
      backgroundColor="#40ffffff"
      progressColor="#60ffffff"
      thumbColor="#ffffff"
      :listenProgress="true"
      @seek-change="onSeekChange"
      :focusable="true"
      name="progress"
      @focus="focusChange"
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
    onSeekChange(e) {
      console.log(`seekBar onSeekChange fromUser:${e.fromUser},left:${e.pLeft},right:${e.pRight},state:${e.state}`);
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
