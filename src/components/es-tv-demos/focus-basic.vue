<template>


  <div class="listView">
    <div class="row" :clipChildren="true">
      <div class="simpleBox" :focusable="true" :focusScale="1.1" >
        <p >焦点属性</p>
      </div>

      <div class="simpleBox" focusView >
        <p >focusView属性:激活焦点、白色边框、默认放大倍数</p>
      </div>
      //TODO 使用类来控制焦点
      <div class="divBox" :focusable="true" >
        <p >使用类来控制焦点</p>
      </div>

      <div class="divBoxClass" :focusable="true">

        <div class="divBoxTest" :duplicateParentState="true">
          <p :duplicateParentState="true">焦点时变色</p>
          <p :duplicateParentState="false">焦点时不变</p>
        </div>
        <text-view class="textView" :duplicateParentState="true">duplicateParentState同步父级div的状态变化</text-view>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '../../util';
export default {
  methods: {
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


  .listView{
    width: 1920px;
    height: 1080px;
    background-color: black;
    padding: 25px;
  }

  .listView .row{
    width: 1920px;
    height: 100px;
    padding: 25px;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .listView .simpleBox{
    width: 250px;
    height: 80px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    margin-left: 20px;
    padding: 5px;
  }

  .listView .divBox{
    width: 250px;
    height: 80px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    margin-left: 20px;
    padding: 5px;
    focus-scale:1.2;
    focus-border-style:solid;
    focus-border-radius: 5px;
    focus-background-color:#ff0000;
  }

  .listView .divBoxClass{
    width: 250px;
    height: 80px;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    margin-left: 20px;
  }

  .listView .divBoxTest{
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
    background-color: greenyellow;
    focus-background-color: white;
  }

  .listView  p{
    font-size: 16px;
    color: #42b983;
    focus-color:#ff0000;
    select-color:cyan
  }

  .listView  .textView{
    width: 250px;
    height: 40px;
    font-size: 16px;
    color: #42b983;
    select-color:cyan;
    focus-color:#ff0000;
  }

</style>
