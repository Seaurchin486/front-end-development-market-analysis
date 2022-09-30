<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const props = defineProps({
  date: {
    type: String,
    require: true
  }
})
const store = useStore();
const route = useRoute();
// route.params.city
let skills = store.state.data[route.params.city][props.date].skills;
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
  width: window.innerWidth * 0.8 + "px",
  height: 35 * config.rowNum + "px",
});
</script>
    
<template>
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