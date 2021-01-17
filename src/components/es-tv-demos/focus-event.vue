<template>


  <div class="focusTest" :clipChildren="false">

    <p class="rowHead">焦点UI</p>
    <div class="row" @childFocus="onChildFocus">
      <div class="divBox" :focusable="true" :enableFocusBorder="true" focusBorderColor="#0000ff">
        <p >焦点边框</p>
      </div>

      <div class="divBox" focusView>
        <p >放大效果</p>
      </div>
    </div>

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
  mounted() {
    this.app = getApp();
    Vue.Native.callNative('DeviceEventModule', 'setListenBackPress', true);
  },
  activated() {
    this.app.$on('hardwareBackPress', this.backPress);
    this.app.$on('dispatchKeyEvent', (e) => {
      console.log(`dispatchKeyEvent e is${e}`);
    });
  },
  deactivated() {
    this.app.$off('hardwareBackPress');
    this.app.$off('dispatchKeyEvent');
    delete this.app;
  },
  methods: {
    backPress() {
      Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
    },
    onChildFocus(e) {
      console.log(`onChildFocus index:${e.child.index}`);
    },
  },
};
</script>
<style>

  /* Common CSS Styles */

  .focusTest{
    width: 1920px;
    height: 1080px;
    background-color: white;
    padding: 25px;
  }

  .focusTest .rowHead {
    font-size: 30px;
    color: #555;
    text-align: left;
    line-height: 70px;
  }

  .focusTest .row{
    width: 1920px;
    height: 100px;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .focusTest .divBox{
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
  }


  .focusTest .divBox p{
    font-size: 20px;
    color: #42b983;
  }

</style>
