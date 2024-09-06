<script setup lang="ts">
import TopBar from "../components/TopBar.vue";
import SideBar from "../components/SideBar.vue";
import ChatPanel from "../components/Chat/ChatPanel.vue";
</script>

<template>
  <div class="home-container">
    <TopBar />
    <div class="home-body-container">
      <SideBar />
      <ChatPanel />
    </div>

  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;


  flex-direction: column;
}

.home-body-container {
  width: 100%;
  height: 100%;


  display: flex;

}
</style>