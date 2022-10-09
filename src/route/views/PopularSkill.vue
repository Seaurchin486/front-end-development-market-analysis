<script setup>
import { ref, nextTick } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const props = defineProps({
  date: {
    type: String,
    require: true
  }
})

const emit = defineEmits([
  'update:date'
])

const store = useStore();

const datekeys = Object.keys(store.state.data[store.state.currentCity])
let skills = null
if (datekeys.includes(props.date)) {
  skills = store.state.data[store.state.currentCity][props.date].skills
} else {
  emit('update:date', datekeys[0])
  skills = store.state.data[store.state.currentCity][datekeys[0]].skills
}

let config = {
  data: skills.slice(0, 30).map((item) => {
    return {
      name: item[0],
      value: item[1],
    };
  }),
  rowNum: skills.slice(0, 30).length,
};
let rankStyle = ref({
  width: window.innerWidth * 0.78 + "px",
  height: 35 * config.rowNum + "px",
});
nextTick(()=>{
  const content = document.getElementById('rank-board')
  const contentStyle = getComputedStyle(content)
  rankStyle.value.width = contentStyle.width
})
</script>
    
<template>
  <div id="rank-board" class="content">
    <dv-scroll-ranking-board :config="config" :style="rankStyle" />
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

:deep(.info-name) {
  text-align: start;
  font-weight: bold;
}

:deep(.rank) {
  margin-right: 4px;
}
</style>