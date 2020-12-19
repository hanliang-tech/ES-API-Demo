<template>
  <div id="text-view">
    <div class="view-box"><text-view class="text-view" textSize="20" maxLines="1" ellipsizeMode="2" textColor="#000000" text="这是超出后显示省略号的文本这是超出后显示省略号的文本"></text-view></div>
    <div class="view-box"><text-view class="text-view" :select="true" textSize="20" maxLines="1" ellipsizeMode="3" textColor="#000000" text="这是超出后可以滚动的文本这是超出后可以滚动的文本"></text-view></div>
  </div>
</template>

<style scope>

  /* Common CSS Styles */
  #text-view {
    padding: 100px;
  }
  #text-view .view-box {
    width: 300px;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: #40b883;
    margin-bottom: 40px;
  }
  #text-view .view-box .text-view {
    height: 30px;
  }

</style>
