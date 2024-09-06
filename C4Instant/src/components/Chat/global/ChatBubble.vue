<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="chat-bubble-container">
    {{ message }}
  </div>
</template>

<style scoped>
.chat-bubble-container {
  padding: 20px;
  margin: 10px;

  border-radius: 10px;
  background: var(--bar-background-color);
  filter: drop-shadow(0 0 3px var(--bar-line-color));

  min-width: 80%;

  font-size: 18px;
}
</style>