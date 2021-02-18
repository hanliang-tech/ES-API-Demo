<template>


  <div class="listView">
    <p class="rowHead">横向列表</p>
    <ul
      class="row"
      ref="list1"
      @endReached="onEndReached"
      @scroll="onScroll"
      :numberOfRows="dataCount"
      horizontal
      :enableSelectOnFocus="false"
    >
      <li
        v-for="index in dataCount"
        :key="index"
      >
        <div class="divBox" :focusable="true">
          <p :duplicateParentState="true">{{"item"+index}}</p>
          <div class="mark" :duplicateParentState="true"></div>
        </div>
      </li>
    </ul>

    <ul
      class="row"
      ref="list2"
      @endReached="onEndReached"
      @scroll="onScroll"
      :numberOfRows="dataCount"
      horizontal
      :focusMemory="true"
      :makeChildVisibleClampForward="100"
      :makeChildVisibleClampBackward="200"
      @childFocus="onChildFocus"
      :enableSelectOnFocus="false"
    >
      <li
        v-for="index in dataCount"
        :key="index"
      >
        <div class="divBox" :focusable="true"><p :duplicateParentState="true">{{"item"+index}}</p></div>
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
      dataCount: 10,
      handler: -1,
    };
  },
  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
    onChildFocus(e) {
      const pos = e.child.position;
      console.log(`onChildFocus index:${pos}`);
      this.$refs.list1.scrollToIndex(0, pos, false, 0, 0);
      clearTimeout(this.handler);
      this.handler = setTimeout(() => {
        Vue.Native.callUIFunction(this.$refs.list1, 'setSelectChildPosition', [pos]);
      }, 16);
    },
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
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
    select-background-color:yellow;
  }

  .listView .divBox .mark{
    width: 30px;
    height: 10px;
    background-color: transparent;
    select-background-color:blue;
  }

  .listView .divBox p{
    font-size: 16px;
    color: #42b983;
    focus-color: white;
    select-color:red;
  }

</style>
