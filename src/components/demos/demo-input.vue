<template>
  <div ref="inputDemo" class="demo-input" @click="blurAllInput">
    <label>文本:</label>
    <input
      placeholder="Text"
      class="input"
      v-model="text"
      ref="input"
      name="input"
      @click="onClick"
      @keyboardWillShow="onKeyboardWillShow"
      :focusable="true"
      @focus="onfocus"
      :class="{focus: focusName === 'input'}"
    />
    <div>
      <span>文本内容为：</span>
      <span>{{ text }}</span>
    </div>
    <button class="input-button" :focusable="true" @focus="onfocus" @click="clearTextContent" >
      <span>清空文本内容</span>
    </button>
    <button class="input-button" :focusable="true" @focus="onfocus" @click="focus" >
      <span>Focus</span>
    </button>
    <button class="input-button" :focusable="true" @focus="onfocus" @click="blur" >
      <span>Blur</span>
    </button>
    <label>数字:</label>
    <input
      type="number"
      ref="number"
      name="number"
      placeholder="Number"
      class="input"
      @change="textChange"
      @click="onClick"
      :focusable="true"
      @focus="onfocus"
      :class="{focus: focusName === 'number'}"
    />
    <label>密码:</label>
    <input
      type="password"
      ref="password"
      name="password"
      placeholder="Password"
      class="input"
      @change="textChange"
      @click="onClick"
      :focusable="true"
      @focus="onfocus"
      :class="{focus: focusName === 'password'}"
    />
    <label>文本（限制5个字符）:</label>
    <input
      maxlength=5
      ref="maxlength"
      name="maxlength"
      placeholder="5 个字符"
      class="input"
      @change="textChange"
      @click="onClick"
      :focusable="true"
      @focus="onfocus"
      :class="{focus: focusName === 'maxlength'}"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { getApp } from '@/util';
import native from '@/native';
/**
   * 这个 Demo 里有直接操作 DOM 的章节
   */
export default {
  /**
     * 组件加载时自动 focus 第一个输入框
     */
  data() {
    return {
      focusName: '',
      text: '',
    };
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
    this.getChildNodes(this.$refs.inputDemo.childNodes).find(element => element.tagName === 'input').focus();
  },
  methods: {
    /**
       * 当文字改变时输出
       */
    textChange(evt) {
      // 输入框的内容通过 evt.value 传递回来
      console.log(evt.value);
    },
    /**
       * 当点击顶部 View 时取消所有输入框的 focus 状态
       */
    blurAllInput() {
      this.getChildNodes(this.$refs.inputDemo.childNodes).filter(element => element.tagName === 'input').forEach(input => input.blur());
    },
    clearTextContent() {
      this.text = '';
    },
    onKeyboardWillShow(evt) {
      console.log(evt);
    },
    getChildNodes(childNodes) {
      return !Vue.Native ? Array.from(childNodes) : childNodes;
    },
    focus(evt) {
      evt.stopPropagation();
      this.$refs.input.focus();
    },
    blur(evt) {
      evt.stopPropagation();
      this.$refs.input.blur();
    },
    backPress() {
      native.closePage()
    },
    onfocus(e) {
      const name = e.target.attributes.name || ''
      this.focusName = name
    },
    /**
     * 点击输入框时，点击事件会冒泡到顶部 View 导致 focus 时又被 blur 了，所以这里需要阻止一下冒泡
     */
    onClick() {
      this.$refs[this.focusName].focus();
      evt.stopPropagation();
    },
  },
};
</script>

<style scope>
.demo-input {
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
}
.demo-input .input {
  width: 300px;
  height: 48px;
  color: #242424;
  border-width: 2px;
  border-color: #ccc;
  font-size: 16px;
  margin: 20px;
  placeholder-text-color: #aaa;
  /* underline-color-android: #40b883; */
}
.demo-input .input.focus {
  border-color: #40b883;
}
.demo-input .input-button {
  border-color: #4c9afa;
  border-width: 1px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  focus-scale: 1.2;
}
</style>
