<script setup lang="ts">

import AddChatButton from "./AddChatButton.vue";
import Chats from "./Chat/Chats.vue";
import ChatMenu from "./Chat/ChatMenu.vue";
</script>

<template>
  <div class="side-bar-container bar">
    <AddChatButton />
    <Chats />
    <ChatMenu />
  </div>
</template>

<style scoped>
.side-bar-container {

  width: 20em;
  height: 100%;


  background: var(--bar-background-color);

  border-right: solid 2px var(--bar-line-color);

  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>