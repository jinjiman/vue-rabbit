<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <!-- Element Plus 是一套 基于 Vue 3 的 UI 组件库，
   提供了大量可复用的组件（Button、Table、Form、Dialog、DatePicker 等）。
   它本质上是 封装好的 Vue 组件，内置了样式、交互逻辑和一些最佳实践。 -->
    <el-button type="primary">Primary</el-button>
  <!-- 写一个一级路由出口组件 -->
  <router-view/>

  <!-- <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
</template>

<style scoped></style>
