<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LeftSwitch from "./components/LeftSwitch.vue";
import MainContent from "./components/MainContent.vue";
import RightSwitch from "./components/RightSwitch.vue";

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <header style="display: flex; flex-flow: column; align-items: center">
    <dv-decoration-5 :dur="3" style="width: 70%; height: 30px" />
    <p style="margin: 0.25em 0; font-size: 42px; font-weight: bold">
      前端开发市场分析图表
    </p>
  </header>
  <aside class="left">
    <LeftSwitch />
  </aside>
  <main>
    <MainContent />
  </main>
  <aside class="right">
    <RightSwitch />
  </aside>
  <dv-decoration-1 class="top-left" style="width: 200px; height: 50px" />
  <dv-decoration-1
    class="top-right"
    :reverse="true"
    style="width: 200px; height: 50px"
  />
  <dv-decoration-8 class="left-bottom" style="width: 300px; height: 50px" />
  <dv-decoration-8
    class="right-bottom"
    :reverse="true"
    style="width: 300px; height: 50px"
  />
  <dv-decoration-3 class="bottom" style="width: 250px; height: 30px" />
</template>

<style scoped>
.left,
.right {
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

.left-bottom,
.right-bottom,
.top-right,
.top-left,
.bottom {
  position: fixed;
}
.left-bottom {
  bottom: 0;
  left: 0;
}
.right-bottom {
  bottom: 0;
  right: 0;
}
.top-right {
  top: 0px;
  right: 0px;
}
.top-left {
  top: 0px;
  left: 0px;
  transform: rotateY(180deg);
}
.bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
