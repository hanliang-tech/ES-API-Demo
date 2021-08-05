<template>
  <div id="iframe-demo" :style="iframeStyle">
    <label>内嵌网址：</label>
    <iframe class="iframe" ref="iframe" :src="url" @load="onLoad" />
    <label>内嵌html：</label>
    <iframe class="iframe" ref="iframe2" :source="{html: html}" />
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';
import native from '@/native';
export default {
  data() {
    return {
      url: 'http://mp.es.hiliad.com/',
      displayUrl: 'http://mp.es.hiliad.com/',
      iframeStyle: {
        'min-height': Vue.Native ? 100 : '100vh',
      },
      html: '<div>iframe内容</div>',
    };
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },
  methods: {
    backPress() {
      native.closePage()
    },
    onLoad(evt) {
      let { url } = evt;
      if (url === undefined) {
        url = this.$refs.iframe.src;
      }
      if (url !== this.url) {
        this.displayUrl = url;
      }
    }
  },
};
</script>

<style>
  #iframe-demo {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  #iframe-demo #address {
    height: 48px;
    border-color: #ccc;
    border-width: 1px;
  }

  #iframe-demo .iframe {
    flex: 1;
    flex-grow: 1;
  }
</style>
