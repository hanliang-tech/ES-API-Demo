<template>
  <div id="root">
      <!-- transitionTime: 设置切换的过渡时间 -->
    <img-transition ref="bg" style="width:1920; height:1080;" :transitionTime=1000 />
  </div>
</template>


<script>
var index = 0;
export default {
    data(){
        return {
            images:[
            'http://fitimg.fangtangtv.com/tab/tab1block1-1bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block1-2bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block1-3bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block1-4bg.jpg',
            ],
            colors:[
                -1,
                -16711681,
                -12303292,
                 -65281,
            ]
        }
        
    },
    mounted() {
        this.$refs.bg.setNextImage(this.images[0])
        setInterval(() => {
            var r = Math.random();
            if(r > 5){
                // setNextImage: 过渡到图片
                this.$refs.bg.setNextImage(this.images[++index % this.images.length])
            }else{
                // setNextImage: 过渡到颜色
                this.$refs.bg.setNextColor(this.colors[++index % this.colors.length])
            }
            
        }, 3000)
    }
}
</script>
