import textView from './text-view.vue';
import focusui from './focus-event.vue';
import focusBasic from './focus-basic.vue';
import listView from './list.vue';
import loading from './loading.vue';
import progress from './progress.vue';
import divGradient from './div-gradient-bg.vue';
import imgTransition from './img-transition.vue';
import imgQr from './img-qr.vue';
import videoView from './video.vue';
import coverFlow from './cover-flow';
import danMu from './danmu';

const demos = {
  focusBasic: {
    name: 'focus基础',
    component: focusBasic,
  },
  focusUI: {
    name: 'focus事件',
    component: focusui,
  },
  textView: {
    name: 'text-view 组件',
    component: textView,
  },
  listView: {
    name: 'ListView扩展',
    component: listView,
  },
  loading: {
    name: 'LoadingView',
    component: loading,
  },
  progress: {
    name: 'Progress',
    component: progress,
  },
  divGradient: {
    name: 'Div渐变背景',
    component: divGradient,
  },
  imgTransition: {
    name: '渐变动画背景',
    component: imgTransition,
  },
  imgQr: {
    name: '二维码',
    component: imgQr,
  },
  videoView: {
    name: '视频组件',
    component: videoView,
  },
  CoverFlow: {
    name: 'CoverFlow',
    component: coverFlow,
  },
  DanMu: {
    name: '弹幕',
    component: danMu,
  },

};


export default demos;
