<script setup>
import { ref } from "vue";

// 目标是做出固定格式的表格
// 一个总表
// 地区分表 （还要从给的数据中获取并渲染）
const mainOption = ref({
  xAxis: {
    type: "category",
    data: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
  },
  yAxis: {},
  series: [
    {
      type: "bar",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    },
  ],
});

let areaOptions = ref([
  {
    title: {
      text: "张三",
    },
    xAxis: {
      type: "category",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
      },
    ],
  },
  {
    title: {
      text: "李四",
    },
    xAxis: {
      type: "category",
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
      },
    ],
  },
]);
</script>
    
<template>
  <p>薪资分布</p>
  <div class="content">
    <v-echart :option="mainOption" />
    <div class="area-chart" v-for="key in areaOptions.length" :key="key">
      <v-echart :option="areaOptions[key-1]" />
    </div>
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
.area-chart {
  width: 40vw;
  height: 500px;
  float: left;
}
</style>