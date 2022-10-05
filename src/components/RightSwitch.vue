<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
function isCheck(city) {
  return store.state.currentCity === city
}
</script>
  
<template>
  <div :class="{ drop:true, checked:isCheck('hefei') }" @click="store.commit('changeCity', 'hefei')">
    <p>合肥</p>
  </div>
  <div :class="{ drop:true, checked:isCheck('hangzhou') }" @click="store.commit('changeCity', 'hangzhou')">
    <p>杭州</p>
  </div>
</template>
  
<style scoped>
.drop {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin-bottom: 3px;

  width: 80%;
  color: rgb(105, 105, 219);
  text-shadow: -1px -1px 3px rgb(105, 105, 219);
  --button-bg: #58a3;
  background: 
    linear-gradient(135deg, transparent 5%, var(--button-bg) 0),
    linear-gradient(45deg, transparent 5%, var(--button-bg) 0) bottom;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}

.drop:hover {
  width: 100%;
  cursor: pointer;
}

.checked {
  width: 100%;
  font-size: large;
  font-weight: hold;
}
</style>
  