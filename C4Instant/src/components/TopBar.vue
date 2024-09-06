<script setup lang="ts">

import LOGO from "./LOGO.vue";
import Avatar from "./Avatar.vue";

import avatar from '../assets/avatar.png'
</script>

<template>
  <div class="top-bar-container bar">
    <LOGO />
    <Avatar :size="70" :src="avatar" class="top-avatar"/>
  </div>
</template>

<style scoped>

.top-bar-container {
  width: calc(100%);
  min-height: 120px;
  background: var(--bar-background-color);

  border-bottom: solid 2px var(--bar-line-color);

  display: flex;
  align-items: center;
}

.top-avatar {
  cursor: pointer;

  position: relative;
  right: -60%;
}


</style>