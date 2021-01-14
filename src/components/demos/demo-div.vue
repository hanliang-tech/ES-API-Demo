<template>
  <div id="div-demo">
    <div>
      <label>背景图效果:</label>
      <div class="div-demo-1">
        <p class="div-demo-1-text">Hippy 背景图展示</p>
      </div>
      <label>Transform</label>
      <div class="div-demo-transform">
        <p class="div-demo-transform-text">Transform</p>
      </div>
      <label>水平滚动:</label>
      <div class="div-demo-2" :focusable=false>
        <!-- div 带着 overflow 属性的，只能有一个子节点，否则终端会崩溃 -->
        <div class="display-flex flex-row div-demo-2-container">
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>A</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>B</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>C</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>D</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>E</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>F</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>G</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>H</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>I</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>J</p>
          </div>
        </div>
      </div>
      <label>垂直滚动:</label>
      <div class="div-demo-3" :focusable=false>
        <!-- div 带着 overflow 属性的，只能有一个子节点，否则终端会崩溃 -->
        <div class="display-flex flex-column">
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>A</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>B</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>C</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>D</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>E</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>F</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>G</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>H</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>I</p>
          </div>
          <div class="text-block" :focusable=true :focusScale="1.1">
            <p>J</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>

  /* Common CSS Styles */
  label {
    font-size: 22px;
  }

  #div-demo {
    flex: 1;
    overflow-y: scroll;
    padding: 50px;
  }

  .display-flex {
    display: flex;
  }

  .flex-row {
    flex-direction: row;
  }

  .flex-column {
    flex-direction: column;
  }

  .text-block {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-style: solid;
    border-width: 1px;
    border-color: #40b883;
    font-size: 80px;
    margin: 20px;
    color: #40b883;
    text-align: center;
  }
  .text-block p {
    color: #40b883;
    text-align: center;
    font-size: 80px;
    line-height: 100px;
  }

  /* Specfic styles */
  .div-demo-1 {
    width: 600px;
    height: 200px;
    background-color: transparent;
    background-image: url('http://test-mp.hiliad.com/static/images/WX20201028-180320@2x.png');
    background-repeat: no-repeat;
  }

  .div-demo-1-text {
    margin-left: 40px;
    color: #fff;
    font-size: 20px;
  }

  /* flex-direction is necessary for horizontal scrolling for Native */
  .div-demo-2 {
    overflow-x: scroll;
    margin: 10px;
    flex-direction: row;
    width: 1000px;
  }

  .div-demo-3 {
    overflow-y: scroll;
    margin: 10px;
    height: 320px;
  }

  .div-demo-transform {
    background-color: #40b883;
    transform: rotate(30deg) scale(.5);
    width: 120px;
    height: 120px;
  }

  .div-demo-transform-text {
    line-height: 120px;
    height: 120px;
    width: 120px;
    text-align: center;
  }
</style>
