<template>
  <div id="app">
    <van-button type="primary">主要按钮</van-button>
    <div class="box"></div>
    <router-view />
  </div>
</template>

<style lang="less">
.box{
  width: 700px;
  height: 200px;
  background: #f00;
}
</style>
