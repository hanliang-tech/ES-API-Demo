import Vue from 'vue';

function registerCoverFlow(){
  Vue.registerElement('CoverFlow',{
    component:{
      name :'CoverFlow'
    },
  });

  Vue.component('cover-flow',{

    render(h){
      return h('CoverFlow',
        {
          ref: 'CoverFlow'
        },this.$slots.default
      );
    }
  });
}

export default registerCoverFlow;
