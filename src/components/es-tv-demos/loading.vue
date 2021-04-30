<template>


  <div class="loadingView">
    <loading-view color="#40b883" style="width: 120px;height: 120px;" />
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';
import native from '@/native';
export default {
  methods: {
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

  .loadingView{
    width: 1920px;
    height: 1080px;
    padding: 50px;
    justify-content: center;
    align-items: center;
  }

</style>
