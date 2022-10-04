<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
  
<template>
  <div class="drop">
    <router-link :to="`/SalaryDistribution`"><p>薪资分布</p></router-link>
  </div>
  <div class="drop">
    <router-link :to="`/AreaDistribution`"><p>地区分布</p></router-link>
  </div>
  <div class="drop">
    <router-link :to="`/PopularSkill`"><p>热门技能</p></router-link>
  </div>
</template>
  
<style scoped>
  .drop {
    position: relative;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: -1px -1px 3px blue;
    filter: drop-shadow(2px 2px 5px blue);
    box-shadow:
        inset 4px 4px 8px rgba(0, 0, 0, 0.05),
        7px 12px 8px rgba(0, 0, 0, 0.05),
        7px 10px 20px rgba(0, 0, 0, 0.05),
        inset -4px -4px 15px rgba(138, 43, 226, 0.9);
}
</style>
  