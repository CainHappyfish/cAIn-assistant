<script setup lang="ts">

</script>

<template>
  <div class="add-chat-button">
    <p> + New Chat</p>
  </div>
</template>

<style scoped>
.add-chat-button {
  width: 14em;
  height: 3em;

  margin: 20px;

  border-radius: 10px;


  background: linear-gradient(30deg, var(--linear-gradient-1), var(--linear-gradient-2));

  transition: all 0.5s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

}

.add-chat-button:hover {
  font-size: 18px;
}

.add-chat-button p {
  font-family: Calibri, sans-serif;
  font-size: 1.5em;

  color: white;
}
</style>