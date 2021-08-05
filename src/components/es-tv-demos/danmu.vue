<template>
  <div class="my_container">
    <danmu-view class="danmu" ref="danmu" :lineMargin=30 />
    <div class="btn-group">
      <div class="button" @click="sendText" :focusable=true :focusScale="1.1" :requestFocus='true'><p
        duplicateParentState>普通文字弹幕</p></div>
      <div class="button" @click="sendTextDecorator" :focusable=true :focusScale="1.1"><p duplicateParentState>
        文字修饰弹幕</p></div>
      <div class="button" @click="sendSpecial" :focusable=true :focusScale="1.1"><p duplicateParentState>高级弹幕</p></div>
      <div class="button" @click="sendImage" :focusable=true :focusScale="1.1"><p duplicateParentState>图片弹幕</p></div>
      <div class="button" @click="showOrHide" :focusable=true :focusScale="1.1"><p duplicateParentState>
        {{ showHideText }}</p></div>
      <div class="button" @click="pauseOrResume" :focusable=true :focusScale="1.1"><p duplicateParentState>
        {{ pauseResumeText }}</p></div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue';
import {getApp} from '@/util';
import native from '@/native';

let pause = false;
let show = true;

export default {
  data() {
    return {
      pauseResumeText: '暂停',
      showHideText: '隐藏',
    }
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },
  methods: {
    backPress() {
      native.closePage()
    },

    sendText() {
      this.$refs.danmu.addDM([{
        text: '文本弹幕123456',
        textColor: '#000000',
      }])
    },

    sendTextDecorator() {
      this.$refs.danmu.addDM([{
        text: '文本弹幕123456',

        textSize: 22,
        textColor: '#FFFF00',

        backgroundColor: '#55000000',
        backgroundRadius: 25,

        borderColor: "#D2C0AB",
        borderRadius: 25,
        borderWidth: 2,

        padding: {left: 10, top: 2, right: 10, bottom: 2}
      }])
    },

    sendSpecial() {
      this.$refs.danmu.addDM([
        // {
        //   type: 7,
        //   priority:1,
        //   text: '♥♥♥♥♥♥♥',
        //   textSize: 35,
        //   textColor: '#88FF0000',
        //   moveDuration: 500,
        //   alphaF: 0.1,
        //   alphaT: 1.0,
        //   alphaDuration: 500,
        // },
        {
          type: 7,
          text: '♥♥♥♥♥♥♥♥♥♥♥♥♥♥',
          duration:5000,
          priority:1,
          textSize: 35,
          textColor: '#FF0000',
          moveDuration: 2000,
          alphaF: 0.1,
          alphaT: 1.0,
          alphaDuration: 500,
          startX: 0.35,
          startY: 0,
          endX: 0.35,
          endY: 0.4
        },
        {
          type: 7,
          text: '♥♥♥♥♥♥♥♥♥♥♥♥♥♥',
          duration:5000,
          priority:1,
          textSize: 35,
          textColor: '#FF0000',
          moveDelay: 100,
          moveDuration: 2000,
          alphaF: 0.1,
          alphaT: 1.0,
          alphaDuration: 500,
          startX: 0.52,
          startY: 0,
          endX: 0.52,
          endY: 0.2,
          rotateZ:90
        },
        {
          type: 7,
          text: '♥♥♥♥♥',
          duration:4000,
          priority:1,
          textSize: 35,
          textColor: '#FF0000',
          moveDelay: 400,
          moveDuration: 2000,
          alphaF: 0.1,
          alphaT: 1.0,
          alphaDuration: 1000,
          startX: 0.47,
          startY: 0.2,
          endX: 0.47,
          endY: 0.52,
          rotateZ:135
        },
        {
          type: 7,
          text: '♥♥♥♥♥♥',
          duration:4800,
          priority:1,
          textSize: 35,
          textColor: '#FF0000',
          moveDuration: 2000,
          alphaF: 0.1,
          alphaT: 1.0,
          alphaDuration: 1000,
          startX: 0.54,
          startY: 1,
          endX: 0.54,
          endY: 0.43,
          rotateZ:45
        }
      ])
    },

    sendImage() {
      this.$refs.danmu.addDM([{
        text: '图片弹幕123456',

        textSize: 25,
        textColor: '#D8BEA4',
        textShadowColor: '#000000',

        backgroundColor: '#40000000',
        backgroundRadius: 25,

        borderColor: "#D8BEA4",
        borderRadius: 25,
        borderWidth: 2,

        imageUri: "http://test-mp.hiliad.com/static/images/speaker_xm.png",
        imageSize: {width: 25, height: 25},

        padding: {left: 5, top: 2, bottom: 2}
      }])
    },

    pauseOrResume() {
      if (pause) {
        this.$refs.danmu.resume()
      } else {
        this.$refs.danmu.pause()
      }
      this.pauseResumeText = pause ? '暂停' : '恢复';
      pause = !pause;
    },

    showOrHide() {
      if (show) {
        this.$refs.danmu.hide()
      } else {
        this.$refs.danmu.show()
      }
      this.showHideText = show ? '显示' : '隐藏';
      show = !show;
    },
  }
}
</script>

<style scoped>
.my_container {
  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: dimgrey;
}

.my_container .danmu {
  width: 1920px;
  height: 1000px;
}

.my_container .btn-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.my_container .button p {
  color: #000;
}
</style>
