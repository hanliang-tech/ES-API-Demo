import demoButton from './demo-button.vue';
import demoDiv from './demo-div.vue';
import demoImg from './demo-img.vue';
import demoP from './demo-p.vue';
import demoList from './demo-list.vue';
// import demoWebSocket from './demo-websocket.vue';

const demos = {
  demoDiv: {
    name: 'div 组件',
    component: demoDiv,
  },
  demoP: {
    name: 'p 组件',
    component: demoP,
  },
  demoButton: {
    name: 'button 组件',
    component: demoButton,
  },
  demoImg: {
    name: 'img 组件',
    component: demoImg,
  },
  demoUl: {
    name: 'ul/li 组件',
    component: demoList,
  },
  // demoWebSocket: {
  //   name: 'WebSocket',
  //   component: demoWebSocket,
  // },
};

export default demos;
