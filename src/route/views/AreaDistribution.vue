<script setup>
// 从 store 拿数
// 根据地区计算总的
// 做图表输出

</script>
    
<template>
  <p>地区分布</p>
  <div class="content">
    地图
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