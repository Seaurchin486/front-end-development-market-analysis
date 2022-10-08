<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import * as echarts from "echarts";

const props = defineProps({
  date: {
    type: String,
    require: true,
  },
});

const store = useStore();
const route = useRoute();
const areas = store.state.data[store.state.currentCity][props.date].areas;

let mainData = Array(31).fill(0);
Object.values(areas).forEach((item) => {
  Object.entries(item).forEach((inner) => {
    mainData[inner[0]] += inner[1];
  });
});
mainData.shift();
// 一个总表
const mainOption = ref({
  title: {
    text: "全市薪资分布",
    x: "center",
    textStyle: {
      color: "GhostWhite",
    },
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    axisLabel: {
      inside: true,
      color: "#fff",
      textShadowBlur: 3,
      textShadowColor: "red",
      textShadowOffsetX: 2,
      textShadowOffsetY: 2,
    },
    z: 10,
    data: [
      "1k",
      "2k",
      "3k",
      "4k",
      "5k",
      "6k",
      "7k",
      "8k",
      "9k",
      "10k",
      "11k",
      "12k",
      "13k",
      "14k",
      "15k",
      "16k",
      "17k",
      "18k",
      "19k",
      "20k",
      "21k",
      "22k",
      "23k",
      "24k",
      "25k",
      "26k",
      "27k",
      "28k",
      "29k",
      "30k",
    ],
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "#9996",
      },
    },
  },
  axisLabel: {
    color: "#999",
  },
  series: [
    {
      type: "bar",
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#83bff6" },
          { offset: 0.5, color: "#188df0" },
          { offset: 1, color: "#188df0" },
        ]),
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2378f7" },
            { offset: 0.7, color: "#2378f7" },
            { offset: 1, color: "#83bff6" },
          ]),
        },
      },
      data: mainData,
    },
  ],
});

// 地区分表 （还要从给的数据中获取并渲染）
let maxCount = 0;
let areaOptions = Object.keys(areas).map((item) => {
  let areaData = Array(31).fill(0);
  Object.entries(areas[item]).forEach(([key, value]) => {
    areaData[key] = value;
    maxCount = Math.max(maxCount, value);
  });
  areaData.shift();
  return {
    title: {
      text: item,
      x: "center",
      textStyle: {
        color: "GhostWhite",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      axisLabel: {
        inside: true,
        color: "#fff",
        textShadowBlur: 3,
        textShadowColor: "red",
        textShadowOffsetX: 2,
        textShadowOffsetY: 2,
      },
      z: 10,
      data: [
        "1k",
        "2k",
        "3k",
        "4k",
        "5k",
        "6k",
        "7k",
        "8k",
        "9k",
        "10k",
        "11k",
        "12k",
        "13k",
        "14k",
        "15k",
        "16k",
        "17k",
        "18k",
        "19k",
        "20k",
        "21k",
        "22k",
        "23k",
        "24k",
        "25k",
        "26k",
        "27k",
        "28k",
        "29k",
        "30k",
      ],
    },
    yAxis: {
      // max: maxCount,
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#9996",
        },
      },
    },
    series: [
      {
        type: "bar",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data: areaData,
      },
    ],
  };
});
areaOptions = areaOptions.map((item) => {
  item.yAxis.max = maxCount;
  return item;
});
</script>
    
<template>
  <div class="content">
    <v-echart :option="mainOption" />
    <div class="area-chart" v-for="key in areaOptions.length" :key="key">
      <v-echart :option="areaOptions[key - 1]" />
    </div>
    <div class="roll-tip"></div>
    <!-- 不知道为什么放到外面就会出现移位 -->
  </div>
</template>
    
<style scoped>
.content {
  overflow-x: hidden;
  overflow-y: auto;
  height: 80vh;
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
  width: 50%;
  height: 450px;
  float: left;
}

.roll-tip {
  position: fixed;
  bottom: 20px;
  left: 50%;
  translate: -50% 0;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-right: solid #858dd9 10px;
  border-bottom: solid #858dd9 10px;
  scale: 100% 50%;
  transform: rotate(45deg);
  animation: show 1.5s infinite alternate;
}
@keyframes show {
  from {
    opacity: 0.2;
  };
  to {
    opacity: 0.6;
  }
}
</style>