<script setup lang="ts">
import logo from '../assets/aislogo.svg'
import {ref} from "vue";

const title = ref("C4iN's AI-Chat")

</script>

<template>
  <div class="logo-container">
    <img :src="logo" alt="logo" class="logo"/>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');

.logo {
  width: 5rem;
}

.logo-container {
  width: 30rem;

  display: flex;
  align-items: center;

}

.title {
  background: linear-gradient(to right, var(--linear-gradient-1), var(--linear-gradient-2));
  background-clip: text;
  color: transparent;
  font-family: "Playwrite CU", cursive;
  margin: 0 10px;
}
</style>