<template>


  <div class="listView">
    <p class="rowHead">横向列表</p>
    <ul
      class="row"
      ref="list"
      @endReached="onEndReached"
      @scroll="onScroll"
      :numberOfRows="dataCount"
      horizontal
    >
      <li
        v-for="index in dataCount"
        :key="index"
      >
        <div class="divBox" :focusable="true"><p>{{"item"+index}}</p></div>
      </li>
    </ul>

  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '../../util';
export default {
  data() {
    return {
      blockDirections: ['left', 'right'],
      dataCount: 100,
    };
  },
  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
  },
  mounted() {
    this.app = getApp();
    Vue.Native.callNative('DeviceEventModule', 'setListenBackPress', true);
  },
  activated() {
    this.app.$on('hardwareBackPress', this.backPress);
  },
  deactivated() {
    this.app.$off('hardwareBackPress');
    delete this.app;
  },
};
</script>

<style>


  .listView{
    width: 1920px;
    height: 1080px;
    background-color: black;
    padding: 25px;
  }

  .listView .rowHead {
    font-size: 30px;
    color: white;
    text-align: left;
    line-height: 70px;
  }

  .listView .row{
    width: 1600px;
    height: 100px;
    padding: 25px;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .listView .divBox{
    width: 200px;
    height: 50px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    margin-left: 20px;
    padding: 5px;
    focus-scale:1.0;
    focus-background-color:red;
  }

  .listView .divBox p{
    font-size: 16px;
    color: #42b983;
  }

</style>
