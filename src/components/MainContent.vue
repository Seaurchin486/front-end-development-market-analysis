<script setup>
import { onMounted, ref } from "vue";
import { useStore } from 'vuex'

const store = useStore()
let dateValue = ref("20220919");
let options = ref(
  Object.keys(store.state.data[store.state.currentCity]).map(item => {
    return {
      value: item,
      label: item
    }
  })
);

</script>

<template>
  <div>
    <el-select
      v-model="dateValue"
      filterable
      placeholder="选择日期"
      size="small"
      style="float: left"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <router-view
      :key="store.state.currentCity + dateValue"
      :date="dateValue"
      style="clear: both"
    ></router-view>
  </div>
</template>

<style scoped>
</style>
