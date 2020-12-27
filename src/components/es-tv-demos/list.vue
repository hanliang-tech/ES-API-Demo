<template>


  <div class="listView">
    <div class="row" :clipChildren="true">
      <div class="divBox" :focusable="true" :enableFocusBorder="true" focusBorderColor="#0000ff">
        <p >焦点边框</p>
      </div>

      <div class="divBox" focus >
        <p >focus属性激活焦点、边框、放大1.1倍</p>
      </div>

      <div class="divBox" :focus="{
        border:true,    //激活边框
        focusScale:1.1, //焦点放大1.3倍
        borderColor:'#ff0000', //边框颜色
        borderRadius:10   //边框圆角半径
      }" >
        <p>focus对象进一步控制焦点样式</p>
      </div>

      //TODO 使用类来控制焦点
      <div class="divBox" focus >
        <p >使用类来控制焦点</p>
      </div>
    </div>

  </div>
</template>

<style>


  .listView{
    width: 1920px;
    height: 1080px;
    background-color: black;
    padding: 25px;
  }

  .listView .row{
    width: 1920px;
    height: 100px;
    padding: 25px;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .listView .divBox{
    width: 200px;
    height: 50px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    margin-left: 20px;
    padding: 5px;
  }

  .listView .divBox p{
    font-size: 16px;
    color: #42b983;
  }

</style>
