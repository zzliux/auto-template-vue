<template>
  <div style="padding: 10px">
    <van-cell-group title="通信的例子">
      <van-field v-model="inputVal" label="文本" placeholder="请输入数字" />
    </van-cell-group>
    <van-button type="primary" plain @click="toastClick">toast</van-button>
    <van-button type="info" plain @click="autoRandomNumberClick">使用auto生成随机数</van-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Field, CellGroup } from "vant";

Vue.use(Button);
Vue.use(Field);
Vue.use(CellGroup);

export default {
  data() {
    return {
      inputVal: 66,
    };
  },
  methods: {
    async toastClick() {
      // ./src/index.js 下接的webview.on监听通信，接收该参数
      await AutoWeb.autoPromise("toastLog", this.inputVal);
    },
    async autoRandomNumberClick() {
      this.inputVal = await AutoWeb.autoPromise("randomNum", null);
    },
  },
};
</script>
