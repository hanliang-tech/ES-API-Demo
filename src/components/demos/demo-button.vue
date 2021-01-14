<template>
  <div class="button-demo">
    <label>按钮和状态绑定:</label>
    <button :class="{ 'is-active': isClicked }" :focusable="true" :requestFocus="true"
      class="button-demo-1"
      @click="clickView">
      <span v-if="isClicked" class="button-text">视图已经被点击了，再点一下恢复</span>
      <span v-else class="button-text">视图尚未点击</span>
    </button>
    <img v-show="isClicked" src="http://test-mp.hiliad.com/static/images/WX20201028-180320@2x.png" class="button-demo-1-image" />
  </div>
</template>

<script>
export default {
  methods: {
    clickView() {
      this.isClicked = !this.isClicked;
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>

<style scope>
  .button-demo {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .button-demo-1 {
    height: 64px;
    width: 240px;
    border-style: solid;
    border-color: #40b883;
    border-width: 2px;
    border-radius: 10px;
    align-items: center;
  }

  .button-demo-1 .button-text {
    line-height: 56px;
    text-align: center;
  }

  .button-demo-1-image {
    width: 216px;
    height: 58px;
  }

  .button-demo-1.is-active {
    color: white;
    background-color: red;
  }

  .button-demo-1.is-pressing {
    color: white;
    background-color: blue;
  }
</style>
