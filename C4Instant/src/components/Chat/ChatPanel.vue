<script setup lang="ts">

import ChatWindow from "./ChatWindow.vue";
import ChatInput from "./ChatInput.vue";
</script>

<template>
  <div class="chat-panel">
    <ChatWindow />
    <ChatInput />
  </div>
</template>

<style scoped>
.chat-panel {
  width: 100%;
  min-height: 80%;

  display: flex;
  flex-direction: column;

  align-items: center;

}
</style>