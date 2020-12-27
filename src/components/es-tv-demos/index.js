import textView from './text-view.vue';
import focusui from './focus-event.vue';
import focusBasic from './focus-basic.vue';
import listView from './list.vue';
import loading from './loading.vue';

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

};


export default demos;
