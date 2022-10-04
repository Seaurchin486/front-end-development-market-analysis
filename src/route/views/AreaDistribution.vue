<script setup>
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
const areas = store.state.data[store.state.currentCity][props.date].areas;
// 根据地区计算总的
let maxCount = 100;
let areaDatas = Object.entries(areas).map((item) => {
  let count = Object.values(item[1]).reduce((acc, item) => acc + item);
  maxCount = Math.max(maxCount, count);
  return {
    name: item[0],
    value: count,
  };
});

let option = {
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c}",
  },
  visualMap: {
    left: "right",
    min: 0,
    max: maxCount + 50,
    inRange: {
      color: ["#45D0FF", "#195078"],
      colorAlpha: [0.68],
    },
  },
  series: [
    {
      name: store.state.currentCity,
      type: "map", //type必须声明为 map 说明该图标为echarts 中map类型
      map: store.state.currentCity,
      zoom: 1.25,
      label: {
        show: true,
        color: "#ececec",
        fontStyle: "bold",
        fontSize: 16,
        textShadowColor: "#122334",
        textShadowBlur: 3,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
      },
      itemStyle: {
        borderWidth: 0.3, //边际线大小
        borderColor: "#1737AD", //边界线颜色
        areaColor: "#e0f3f8", //默认区域颜色
      },
      emphasis: {
        itemStyle: {
          show: false,
          areaColor: null,
        }
      },
      data: areaDatas,
    },
  ],
};
</script>
    
<template>
  <div class="content">
    <v-echart :option="option" />
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
</style>