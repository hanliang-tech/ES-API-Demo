<template>
  <div class="focus-next">
    <div>
      <ul horizontal name="listA" :nextFocusName="{down: 'listC', right: 'listB'}">
        <li><div :focusable=true class="button"><p duplicateParentState>A1</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>A2</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>A3</p></div></li>
      </ul>
      <ul horizontal name="listB">
        <li><div :focusable=true class="button"><p duplicateParentState>B1</p></div></li>
        <li><div :focusable=true class="button" :nextFocusName="{up: 'btnD'}"><p duplicateParentState>B2</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>B3</p></div></li>
      </ul>
      <ul horizontal name="listC">
        <li><div :focusable=true class="button"><p duplicateParentState>C1</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>C2</p></div></li>
        <li><div :focusable=true class="button"><p duplicateParentState>C3</p></div></li>
      </ul>
    </div>
    <div>
      <div class="feature-item">
        <div :focusable=true class="button" name="btnD" :nextFocusName="{right: 'listA', down: 'listB'}"><p duplicateParentState>DD</p></div>
        <div :focusable=true class="button" name="btnE" :nextFocusName="{left: 'listB', down: 'listC'}"><p duplicateParentState>EE</p></div>
      </div>
      <div class="btn-list" style="width:920px;justify-content: flex-end">
        <div :focusable=true class="button" :nextFocusName="{right: 'btn3'}">
          <p duplicateParentState>aa</p>
        </div>
        <div :focusable=true class="button" :nextFocusName="{down: 'btn2'}" name="btnb">
          <p duplicateParentState>bb</p>
        </div>
      </div>
      <div class="btn-list" style="width:920px;flex-direction: row;justify-content: flex-start">
        <ul name="btn2" :nextFocusName="{right: 'btn3'}">
          <li>
            <div :focusable=true class="button" :nextFocusName="{right: 'btn4'}">
              <p duplicateParentState>11</p>
            </div>
          </li>
          <li :focusable=true>
            <div :focusable=true class="button">
              <p duplicateParentState>22</p>
            </div>
          </li>
        </ul>
        <ul name="btn3">
          <li>
            <div :focusable=true class="button" :nextFocusName="{down: 'btnb'}">
              <p duplicateParentState>33</p>
            </div>
          </li>
          <li>
            <div :focusable=true class="button" :nextFocusName="{down: 'btnb'}">
              <p duplicateParentState>44</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="btn-list">
        <ul name="btn4">
          <li>
            <div :focusable=true class="button">
              <p duplicateParentState>55</p>
            </div>
          </li>
          <li :focusable=true>
            <div :focusable=true class="button">
              <p duplicateParentState>66</p>
            </div>
          </li>
        </ul>
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
