<script setup lang="ts">
import CleanLogo from "../../assets/delete.svg"
import SetLogo from "../../assets/settings.svg"
import QuitLogo from "../../assets/quit.svg"
</script>

<template>
  <div class="chat-menu-container">
    <div class="chat-menu-option">
      <img :src="CleanLogo" alt="clean" class="clean-button"/>
      <p>Clean all chats</p>
    </div>
    <router-link to="/settings" class="chat-menu-option">
      <img :src="SetLogo" alt="settings" class="setting-button"/>
      <p>Settings</p>
    </router-link>
    <div class="chat-menu-option">
      <img :src="QuitLogo" alt="quit" class="quit-button"/>
      <p>Quit</p>
    </div>
  </div>
</template>

<style scoped>
.chat-menu-container {
  width: 100%;
  min-height: 200px;
  max-height: 200px;

  position: relative;

  display: flex;
  flex-direction: column;



  border-top: solid 2px var(--bar-line-color);
}

.chat-menu-option {
  color: var(--text-color);

  text-decoration: none;

  display: flex;

  font-family: "Microsoft YaHei UI Light", sans-serif;

  font-size: 18px;

  cursor: pointer;

  transition: all 0.3s ease;
}

.chat-menu-option:hover {
  font-size: 20px;
}

.clean-button {
  width: 1.5em;
  margin: 5px;
}

.setting-button {
  width: 2em;
}

.quit-button {
  width: 1.4em;
  margin: 5px;
}


</style>