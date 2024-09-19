<script setup lang="ts">
import SendLogo from '../assets/send.svg'
</script>

<template>
  <img :src="SendLogo" alt="send" class="send-logo"/>
</template>

<style scoped>
.send-logo {
  margin: 10px;

  width: 40px;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
}

.send-logo:hover {
  width: 45px;
}
</style>