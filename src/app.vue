<template>
  <div id="root">
    <keep-alive>
      <router-view class="feature-content"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    Vue.Native.callNative('DeviceEventModule', 'setListenBackPress', true);
  },
};
</script>

<style scoped>
  #root {
    flex: 1;
    background-color: #fff;
  }
  .button {
    width: 200px;
    margin: 10px;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    focus-background-color: #40b883;
  }
  .button p {
    height: 56px;
    line-height: 56px;
    font-size: 20px;
    color: #40b883;
    text-align: center;
    text-align-vertical: center;
    focus-color: #fff;
  }
</style>
