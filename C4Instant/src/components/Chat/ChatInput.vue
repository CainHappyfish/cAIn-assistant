<script setup lang="ts">
import Attach from "../../assets/attach.svg"
import SendButton from "../SendButton.vue";
</script>

<template>
  <div class="chat-input-container">
    <div class="chat-input">
      <img :src="Attach" alt="attach-logo" class="attach-logo"/>
      <textarea />
      <SendButton />
    </div>
  </div>
</template>

<style scoped>
.chat-input-container {

  width: 100%;
  min-height: 100px;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

}

.attach-logo {
  width: 40px;
  margin: 10px;
}

.chat-input {

  width: 80%;
  max-width: 1000px;
  height: 5em;

  border-radius: 20px;

  background: var(--bar-background-color);
  border: solid 2px var(--bar-line-color);

  transition: all 0.3s ease;

  position: absolute;
  bottom: 20px;

  display: flex;
  align-items: center;
}

.chat-input:hover {
  filter: drop-shadow(0 0 2px var(--bar-line-color));
}

.chat-input textarea {
  height: 50px;
  width: 87%;


  resize: none;
  outline: none;
  border: none;

  line-height: 50px;
  padding: 0;

  font-size: 2em;
}



.chat-input-area:focus {
  border: none;
}
</style>