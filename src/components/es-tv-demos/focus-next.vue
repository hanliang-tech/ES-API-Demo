<template>
  <div class="focus-next">
    <div>
      <ul horizontal name="listA" :nextFocusName="{down: 'listC', right: 'listB'}" ref="giftTabs">
        <li><div :focusable=true class="button"><p duplicateParentState>A1</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>A2</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>A3</p></div></li>
      </ul>
      <ul horizontal name="listB">
        <li><div :focusable=true class="button"><p duplicateParentState>B1</p></div></li>
        <li><div :focusable=true class="button" :nextFocusName="{up: 'btnE'}"><p duplicateParentState>B2</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>B3</p></div></li>
      </ul>
      <ul horizontal name="listC">
        <li><div :focusable=true class="button" ref="listC"><p duplicateParentState>C1</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>C2</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>C3</p></div></li>
      </ul>
    </div>
    <div>
      <div class="feature-item">
        <div :focusable=true class="button" name="btnD" :nextFocusName="{down: 'listB'}"><p duplicateParentState>DD</p></div>
        <div :focusable=true class="button" name="btnE" :nextFocusName="{left: 'listB', down: 'listC'}"><p duplicateParentState>EE</p></div>
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


  .focus-next{
    width: 1920px;
    height: 1080px;
    padding: 25px;
    flex-direction: row;
  }
  .focus-next > div {
    width: 900px;
  }
  .focus-next li {
    width: 220px;
  }

  .btn-list {
    margin-top: 40px;
    flex-direction: row;
  }
  .btn-list .button {
    height: 60px;
    width: 200px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 30px;
    background-color: #00d2cc;
    focus-background-color: #000af5;
  }
  .btn-list .button p {
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
</style>
