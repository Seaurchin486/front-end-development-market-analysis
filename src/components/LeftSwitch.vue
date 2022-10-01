<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
  
<template>
  <router-link :to="`/SalaryDistribution`"><p>薪资分布</p></router-link>
  <router-link :to="`/AreaDistribution`"><p>地区分布</p></router-link>
  <router-link :to="`/PopularSkill`"><p>热门技能</p></router-link>
</template>
  
<style scoped>
</style>
  