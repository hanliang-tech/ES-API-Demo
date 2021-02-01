
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
            'http://fitimg.fangtangtv.com/tab/tab1block2-3bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block2-2bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block2-1bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block3-1bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block3-2bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block3-3bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block3-4bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block4-4bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block4-3bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block4-2bg.jpg',
            'http://fitimg.fangtangtv.com/tab/tab1block4-1bg.jpg',
            'http://fitimg.fangtangtv.com/bg/16bg.jpg',
            'http://fitimg.fangtangtv.com/bg/39bg.jpg',
            'http://fitimg.fangtangtv.com/bg/15bg.jpg',
            'http://fitimg.fangtangtv.com/bg/17bg.jpg',
            'http://fitimg.fangtangtv.com/bg/40bg.jpg',
            'http://fitimg.fangtangtv.com/bg/37bg.jpg',
            'http://fitimg.fangtangtv.com/bg/19bg.jpg',
            'http://fitimg.fangtangtv.com/bg/18bg.jpg',
            'http://fitimg.fangtangtv.com/bg/55bg.jpg',
            'http://fitimg.fangtangtv.com/bg/32bg.jpg',
            'http://fitimg.fangtangtv.com/bg/26bg.jpg',
            'http://fitimg.fangtangtv.com/bg/31bg.jpg',
            'http://fitimg.fangtangtv.com/bg/24bg.jpg',
            ],
            colors:[
                -1,
                -16711681,
                -12303292,
                 -65281,
            ]
        }
        
    },
    activated() {
        this.$refs.bg.setNextImage(this.images[0])
        setInterval(() => {
            var r = Math.random()*999;
            if(r > 400){
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
    