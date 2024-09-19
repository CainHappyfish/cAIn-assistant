<script setup lang="ts">
import TopBar from "../TopBar.vue";
import SideBar from "../SideBar.vue";
import ChatPanel from "../Chat/ChatPanel.vue";
</script>

<template>
  <div class="home-container">
    <TopBar />
    <div class="home-body-container">
      <SideBar />
      <router-view />
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