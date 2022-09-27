<script setup>
// 从 store 拿数
// 根据地区计算总的
// 做图表输出
let option = {
  tooltip: {
    trigger: "item",
  },
  visualMap: {
    left: "right",
    min: 0,
    max: 100,
    inRange: {
      color: [
        "#313695",
        "#4575b4",
        "#74add1",
        "#abd9e9",
        "#e0f3f8",
        "#ffffbf",
        "#fee090",
        "#fdae61",
        "#f46d43",
        "#d73027",
        "#a50026",
      ],
    },
  },
  series: [
    {
      name: "hangzhou",
      type: "map", //type必须声明为 map 说明该图标为echarts 中map类型
      map: "hangzhou",
      itemStyle: {
        normal: {
          label: {
            show: true,
            color: "#eaeaea",
          },
          borderWidth: 1, //边际线大小
          borderColor: "#F5F5F5", //边界线颜色
          areaColor: "#1F54FF", //默认区域颜色
        },
        emphasis: {
          label: {
            show: true,
          },
        },
      },
      data: [
        {name: '上城区', value: 50}
      ],
    },
  ],
};
</script>
    
<template>
  <p>地区分布</p>
  <div class="content">
    <v-echart :option="option" />
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