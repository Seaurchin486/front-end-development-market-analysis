<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>
  
<template>
  <p @click="store.commit('changeCity', 'hefei')">合肥</p>
  <p @click="store.commit('changeCity', 'hangzhou')">杭州</p>
</template>
  
<style scoped>
</style>
  