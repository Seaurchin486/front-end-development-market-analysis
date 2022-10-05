<script setup>
import { ref, nextTick } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
function check(event) {
  const buttons = document.querySelectorAll(".left-drop");

  Array.from(buttons).map((item) => {
    item.classList.remove("checked");
  });
  console.log(event.currentTarget.childNodes)
  event.currentTarget.childNodes[0].classList.add("checked");
}
</script>
  
<template>
  <router-link :to="`/SalaryDistribution`" @click="check">
    <div class="left-drop checked">
      <p>薪资分布</p>
    </div>
  </router-link>
  <router-link :to="`/AreaDistribution`" @click="check">
    <div class="left-drop">
      <p>地区分布</p>
    </div>
  </router-link>
  <router-link :to="`/PopularSkill`" @click="check">
    <div class="left-drop">
      <p>热门技能</p>
    </div>
  </router-link>
</template>
  
<style scoped>
.left-drop {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;

  width: 80%;
  text-shadow: -1px -1px 3px rgb(105, 105, 219);
  --button-bg: #58a5;
  background: linear-gradient(-135deg, transparent 5%, var(--button-bg) 0),
    linear-gradient(-45deg, transparent 5%, var(--button-bg) 0) bottom;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}

.left-drop:hover {
  width: 100%;
}

.checked {
  width: 100%;
  font-size: large;
  font-weight: hold;
}
</style>
  