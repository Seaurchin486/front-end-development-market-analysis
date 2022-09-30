<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div>
    <span>选择日期</span>
    <router-view :key="route.path + '20220919'" :date="'20220919'"></router-view>
  </div>
</template>

<style scoped>

</style>
