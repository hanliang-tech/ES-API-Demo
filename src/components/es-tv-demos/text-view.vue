<template>
  <div id="text-view">
    <div class="view-box"><text-view  class="text-view"  maxLines="1" ellipsizeMode="2" >这是超出后显示省略号的文本这是超出后显示省略号的文本</text-view></div>
    <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >这是超出后可以滚动的文本这是超出后可以滚动的文本</text-view></div>
    <div class="view-box"><text-view  class="text-view"   gravity="center">居中</text-view></div>
    <div class="view-box"><text-view class="text-view"     gravity="start">居前</text-view></div>
    <div class="view-box"><text-view class="text-view"    gravity="end">居后</text-view></div>
    <div class="view-box"><text-view class="text-view"     gravity="centerHorizontal">横向居中</text-view></div>
    <div class="view-box"><text-view class="text-view"     gravity="centerHorizontal|bottom">横向居中、纵向居下</text-view></div>
    <div class="view-box"><text-view class="text-view"     gravity="centerVertical">纵向居中</text-view></div>
    <div class="view-box"><text-view class="text-view"     gravity="centerVertical|end">纵向居中、横向居右</text-view></div>
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
<style scope>
  #text-view {
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  #text-view .view-box {
    width: 300px;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: #40b883;
    margin-bottom: 40px;
    border-radius: 10px;
  }
  #text-view .view-box .text-view {
    height: 50px;
    color:green;
    font-size: 20px;
  }

</style>
