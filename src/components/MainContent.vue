<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
let dateValue = ref("20220919");
let options = ref(
  Object.keys(store.state.data[store.state.currentCity]).map((item) => {
    return {
      value: item,
      label: item,
    };
  })
);
</script>

<template>
  <div style="padding:10px; border: 1px solid transparent">
    <el-select
      v-model="dateValue"
      filterable
      placeholder="选择日期"
      :teleported="false"
      style="float: left; margin-bottom: 5px;"
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
      v-model:date="dateValue"
      style="clear: both"
    ></router-view>
  </div>
</template>

<style scoped>
:deep(.el-select-dropdown__list) {
  background-color: transparent;
}

:deep(.el-input__wrapper) {
  background-color: transparent;
}

:deep(.el-popper) {
  background-color: transparent;
  color: white;
}
:deep(.el-select__popper.el-popper) {
  background-color: transparent !important;
}

:deep(.el-popper.is-light) {
  background-color: transparent !important;
}

:deep(.el-select-dropdown__item) {
  text-shadow: aqua 1px 1px 2px;
  color: aliceblue;
}

:deep(.el-select-dropdown__item.hover, .el-select-dropdown__item:hover) {
  background-color: transparent;
}

:deep(.el-popper.is-light .el-popper__arrow::before) {
  background-color: transparent;
}

:deep(.el-popper__arrow::before) {
  background-color: transparent;
}

:deep(.el-input__inner) {
  color: aliceblue;
}
</style>
