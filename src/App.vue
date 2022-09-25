<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LeftSwitch from './components/LeftSwitch.vue'
import MainContent from './components/MainContent.vue'
import RightSwitch from './components/RightSwitch.vue'

</script>

<template>
  <header style="padding: 1px"><h1>前端开发市场分析图表</h1></header>
  <aside class="left">
    <LeftSwitch />
  </aside>
  <main>
    <MainContent />
  </main>
  <aside class="right">
    <RightSwitch />
  </aside>
</template>

<style scoped>
.left,.right {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 10vw;
}
.left {
  left: 0;
}
.right {
  right: 0;
}

main {
  width: 80vw;
  margin: 0 auto;
}
</style>
