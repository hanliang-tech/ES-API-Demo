<template>
  <div class='container coverflow'>
    <cover-flow class="cf_vertical" :clipChildren="false" :zoomInValue="1.3" :autoScrollInterval="2000" :isVertical="true"
                @scroll="onScroll" ref="coverFlow">
      <div class="scrollChild" >
        <img src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic3.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic3.png">
      </div>
    </cover-flow>

    <cover-flow class="cf_horizontal" :clipChildren="false" :zoomInValue="1.3" :autoScrollInterval="2000" >
      <div class="scrollChild" :clipChildren="false" >
        <img src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic3.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic3.png">
      </div>
    </cover-flow>

  </div>

</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';
import native from '@/native';
export default {
  data() {
    return {
      playPauseText: '暂停',
      videoLoading: true,
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
    onScroll(e) {
      console.log('onScroll', e)
      this.$refs.coverFlow.getCurrentIndex(data => {
        console.log(data.index)
      })
    },
  },
};
</script>

<style scoped>

.coverflow{
  flex-direction: row;
}

.cf_vertical {
  width: 330px;
  height: 800px;
  left: 100px;
}

.cf_vertical .scrollChild {
  display: flex;
  flex-direction: column;
  padding: 50px;
}

.cf_horizontal {
  width: 800px;
  height: 330px;
  left: 500px;
}
.cf_horizontal .scrollChild {
  width: 1920px;
  display: flex;
  flex-direction: row;
  padding: 50px;
}

.coverflow img {
  width: 230px;
  height: 230px;
}
</style>
