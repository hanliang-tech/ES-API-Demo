<template>
  <div class='container coverflow'>
    <cover-flow class="cf_vertical" :clipChildren="false" :zoomInValue="1.3" :autoScrollInterval="2000" :isVertical="true">
      <div class="scrollChild" >
        <img src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic3.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic1.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic2.png">
        <img src="http://test-mp.hiliad.com/static/taobao/pic3.png">
      </div>
    </cover-flow>

    <div>
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

      <div class="swiper-coverFlow">
        <cover-flow class="coverFlow" :isVertical="true" :zoomInValue="1" :autoScrollInterval="4000"
                    @scroll="onScroll" ref="coverFlow">
          <div class="scrollChild" :focusable="false" >
            <div class="child-item" v-for="(item, index) in coverFlowList" :key="index">
              <img :src="item.pic">
            </div>
          </div>
        </cover-flow>
        <div class="swiper-desc" :gradientBackground="{colors: ['#00000F27', '#CC001B53'], cornerRadii4: [0, 0, 10, 10]}">
          <div class="desc">
            <p>{{coverFlowList[slideCurrentIndex].title}}</p>
            <p class="split"> | </p>
            <span>{{coverFlowList[slideCurrentIndex].desc}}</span>
          </div>
          <div class="pagination">
            <div v-for="(item, index) in coverFlowList" :key="index" class="pagination-bullet" :class="{'pagination-bullet-active': index === slideCurrentIndex}"></div>
          </div>
        </div>
      </div>
    </div>
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
      slideCurrentIndex: 0,
      coverFlowList: [
        { title: '这！就是街舞 第三季', desc: '组内PK导师忍痛淘汰爱将', pic: 'http://test-mp.hiliad.com/static/huashu/index/swiper_1.png' },
        { title: '觉醒年代', desc: '强者回归', pic: 'http://test-mp.hiliad.com/static/huashu/index/swiper_2.jpg' },
        { title: '悬崖之上', desc: '烽烟再起', pic: 'http://test-mp.hiliad.com/static/huashu/index/swiper_3.jpg' },
        { title: '速度与激情9', desc: '烽烟再起，强者回归', pic: 'http://test-mp.hiliad.com/static/huashu/index/swiper_4.jpg' },
      ],
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
        this.slideCurrentIndex = data.index
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
  width: 730px;
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
.coverFlow {
  width: 864px;
  height: 485px;
}
.coverFlow .scrollChild {
  flex-direction: column;
  display: flex;
}
.coverFlow .child-item {
  width: 864px;
  height: 485px;
  border-radius: 10px;
}
.coverFlow .child-item img {
  width: 864px;
  height: 485px;
  border-radius: 10px;
}
.swiper-desc {
  width: 864px;
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: transparent;
}
.swiper-desc .desc {
  flex-direction: row;
}
.swiper-desc .desc p {
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  color: #fff;
}
.swiper-desc .desc .split {
  margin-left: 10px;
  margin-right: 10px;
}
.swiper-desc .desc span {
  font-size: 30px;
  line-height: 42px;
  color: #fff;
}
.pagination {
  height: 42px;
  flex-direction: row;
  align-items: center;
}
.pagination .pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 5px;
  border-radius: 6px;
  background-color: rgba(255,255,255,.2);
}
.pagination .pagination-bullet-active {
  background-color: #fff;
}

</style>
