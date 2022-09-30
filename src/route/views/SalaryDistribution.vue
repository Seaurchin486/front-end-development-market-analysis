<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const props = defineProps({
  date: {
    type: String,
    require: true,
  },
});

const store = useStore();
const route = useRoute();
const areas = store.state.data[route.params.city][props.date].areas;

let mainData = Array(30).fill(0)
Object.values(areas).forEach(item => {
  Object.entries(item).forEach(inner => {
    mainData[inner[0]] += inner[1]
  })
})
// 一个总表
const mainOption = ref({
  title: {
    text: "全市薪资分布",
    x: "center",
    textStyle: {
      color: "GhostWhite",
    },
  },
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
      data: mainData,
    },
  ],
});

// 地区分表 （还要从给的数据中获取并渲染）
let areaOptions = Object.keys(areas).map(item => {
  let areaData = Array(30).fill(0)
  Object.entries(areas[item]).forEach(([key, value]) => {
    areaData[key] = value
  })
  return {
    title: {
      text: item,
      x: "center",
      textStyle: {
        color: "GhostWhite",
      },
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
        data: areaData,
      },
    ],
  }
})
</script>
    
<template>
  <div class="content">
    <v-echart :option="mainOption" />
    <div class="area-chart" v-for="key in areaOptions.length" :key="key">
      <v-echart :option="areaOptions[key - 1]" />
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