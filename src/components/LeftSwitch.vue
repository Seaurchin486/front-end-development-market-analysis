<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
  
<template>
  <router-link :to="`/${route.params.city}/SalaryDistribution`"><p>薪资分布</p></router-link>
  <router-link :to="`/${route.params.city}/AreaDistribution`"><p>地区分布</p></router-link>
  <router-link :to="`/${route.params.city}/PopularSkill`"><p>热门技能</p></router-link>
</template>
  
<style scoped>
</style>
  