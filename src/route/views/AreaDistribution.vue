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
    max: 50,
    inRange: {
      color: [
        "#e0f3f8",
        "#fdae61",
        "#f46d43",
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
            color: 'black',
            fontStyle: 'bold',
            textShadowColor: '#fff',
            textShadowBlur: 2,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
          },
          borderWidth: 1, //边际线大小
          borderColor: "#1737AD", //边界线颜色
          areaColor: "#e0f3f8", //默认区域颜色
        },
        emphasis: {
          label: {
            show: true,
          },
        },
      },
      data: [
        {name: '上城区', value: 50},
        {name: '钱塘区', value: 40},
        {name: '临平区', value: 30},
        {name: '萧山区', value: 20},
        {name: '滨江区', value: 10},
        {name: '西湖区', value: 20},
        {name: '拱墅区', value: 30},
        {name: '余杭区', value: 40},
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