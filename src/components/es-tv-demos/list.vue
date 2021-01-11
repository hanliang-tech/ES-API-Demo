<template>


  <div class="listView">
    <ul class="row" :clipChildren="true" :blockFocusDirections="blockDirections">
      <div class="divBox" :focusable="true" :enableFocusBorder="true" focusBorderColor="#0000ff">
        <p >焦点边框</p>
      </div>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      blockDirections: ['left', 'right'],
    };
  },
};
</script>

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
