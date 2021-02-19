<template>
  <div id="animation-demo">
    <label>控制动画</label>
    <div class="toolbar">
      <button @click="togglePlaying" class="toolbar-btn button" :focusable="true" :requestFocus="true">
        <p v-if="playing" :duplicateParentState="true">暂停</p>
        <p v-else :duplicateParentState="true">播放</p>
      </button>
      <button @click="toggleDirection" class="toolbar-btn button" :focusable="true">
        <p v-if="direction === 'horizon'" :duplicateParentState="true">切换纵向</p>
        <p v-else :duplicateParentState="true">切换为横向</p>
      </button>
    </div>
    <div class="fullscreen">
      <loop :playing="playing" :direction="direction">
        <p>I'm a looping animation</p>
      </loop>
    </div>
    <label>点赞笑脸动画:</label>
    <div class="toolbar">
      <button @click="voteUp" class="toolbar-btn button" :focusable="true">
        <p :duplicateParentState="true">点赞 👍</p>
      </button>
      <button @click="voteDown" class="toolbar-btn button" :focusable="true">
        <p :duplicateParentState="true">踩 👎</p>
      </button>
    </div>
    <div class="vote-face-container center">
      <component :is="voteComponent" class="vote-icon" />
    </div>
  </div>
</template>

<script>
/**
 * 动画参数以及默认参数，如果默认值不改就不用填
 *
 * playing 参数：
 *   true                      // 运行动画
 *   false                     // 暂停动画
 *
 * actions 参数：
 *   valueType: undefined,     // 动画的开始和结束值的单位类型，默认为空，代表动画起止值的单位。可以不设，或者设为 rad、deg
 *   delay: 0,                 // 动画延迟开始的时间，单位为毫秒
 *   startValue: 0,            // 动画开始时的值
 *   toValue: 0,               // 动画结束时候的值
 *   duration: 0,              // 动画运行时间
 *   direction: 'center',      // 动画运行方向
 *   timingFunction: 'linear', // 动画插值器类型，可选 linear、ease-in、ease-out、ease-in-out、ease_bezier
 *   repeatCount: 0,           // 动画的重复次数，0为不重复，-1 为一直重复不停，如果在数组中，整个动画的重复次数以第一个动画的值为准
 */

import Vue from 'vue';
import { getApp } from '../../util';
import Loop from './animations/loop.vue';
import VoteUp from './animations/vote-up.vue';
import VoteDown from './animations/vote-down.vue';

export default {
  data() {
    return {
      playing: true,
      direction: 'horizon',
      voteComponent: VoteUp,
    };
  },
  components: {
    Loop,
  },
  methods: {
    voteUp() {
      this.voteComponent = VoteUp;
    },
    voteDown() {
      this.voteComponent = VoteDown;
    },
    togglePlaying() {
      this.playing = !this.playing;
    },
    toggleDirection() {
      this.direction = this.direction === 'horizon' ? 'vertical' : 'horizon';
    },
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

<style scope>
#animation-demo {
  flex: 1;
  padding: 50px;
}

#animation-demo .vote-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
}

#animation-dmeo .vote-face-containe {
  height: 200px;
}
#animation-demo .toolbar {
  justify-content: flex-start;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}
#animation-demo .toolbar p {
  color: #000;
}
</style>
