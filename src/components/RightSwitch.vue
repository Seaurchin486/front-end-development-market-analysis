<script setup>
import router from '../route/route'
import { useRoute } from 'vue-router'
const route = useRoute()
function routerPush(city) {
  const currentType = route.path.split('/').at(-1)
  router.push(`/${city}/${currentType}`)
}
</script>
  
<template>
  <p @click="routerPush('hefei')">合肥</p>
  <p @click="routerPush('hangzhou')">杭州</p>
</template>
  
<style scoped>
</style>
  