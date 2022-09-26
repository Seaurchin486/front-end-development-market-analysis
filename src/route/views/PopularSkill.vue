<script setup>
import { ref } from "vue";
let config = {
  data: [
    {
      name: "新乡",
      value: 44231,
    },
    {
      name: "南阳",
      value: 12022,
    },
    {
      name: "西峡",
      value: 78932,
    },
    {
      name: "驻马店",
      value: 63411,
    },
    {
      name: "新乡",
      value: 44231,
    },
    {
      name: "南阳",
      value: 12022,
    },
    {
      name: "西峡",
      value: 78932,
    },
    {
      name: "驻马店",
      value: 63411,
    },
    {
      name: "新乡",
      value: 44231,
    },
    {
      name: "新乡",
      value: 44231,
    },
    {
      name: "南阳",
      value: 12022,
    },
    {
      name: "西峡",
      value: 78932,
    },
    {
      name: "驻马店",
      value: 63411,
    },
    {
      name: "新乡",
      value: 44231,
    },
    {
      name: "南阳",
      value: 12022,
    },
    {
      name: "西峡",
      value: 78932,
    },
    {
      name: "驻马店",
      value: 63411,
    },
    {
      name: "新乡",
      value: 44231,
    },
    {
      name: "驻马店",
      value: 63411,
    },
    {
      name: "新乡",
      value: 44231,
    },
  ],
  rowNum: 20,
}; // 此数据需要从store中获取
let rankStyle = ref({
  width: window.innerWidth * 0.8 + "px",
  height: 35 * config.rowNum + "px",
});
console.log(rankStyle.value.width);
</script>
    
<template>
  <p>热门技能</p>
  <div class="content">
    <dv-scroll-ranking-board :config="config" :style="rankStyle" />
  </div>
</template>

<style scoped>
.content {
  overflow-x: hidden;
  overflow-y: auto;
  height: 63vh;
}
.content::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.content {
  -ms-overflow-style: none;
}
.content {
  overflow: -moz-scrollbars-none;
}
</style>