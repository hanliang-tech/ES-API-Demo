import Vue from 'vue';

function registerAudioView() {
  Vue.registerElement('AudioView', {
    component: {
      name: 'AudioView',
    },
  });
  Vue.component('audio',{
    methods:{
      onProgress(e){},
      onPlaying(){},
      onPause(){},
      onError(){},
      onEnded(){},
    },
    render(h) {
      return h('AudioView',
        {
          ref: 'AudioView',
        }, this.$slots.default
      );
    },
  });
}

export default registerAudioView;
