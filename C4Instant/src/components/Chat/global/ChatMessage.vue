<script setup lang="ts">

import Avatar from "../../Avatar.vue";
import RobotAvatar from "../../../assets/RobotAvatar.png"
import UserAvatar from "../../../assets/avatar.png"
import ChatBubble from "./ChatBubble.vue";
import {computed} from "vue";


const props = defineProps<{
  message: string
  isUser?: boolean
}>()

const avatar = computed(() => props?.isUser ? UserAvatar : RobotAvatar)
const avatarPos = computed(() => props?.isUser ? 'user-avatar' : '')
const bubblePos = computed(() => props?.isUser ? 'user-bubble' : '')


</script>

<template>
  <div class="chat-message-container">
    <Avatar :size="50" :src="avatar" :class="avatarPos"/>
    <ChatBubble :message="message" :class="bubblePos"/>
  </div>
</template>

<style scoped>
.chat-message-container {
  width: 90%;
  min-height: 70px;

  display: flex;
  margin: 20px;

  font-family: "Microsoft YaHei UI Light", sans-serif;
}

.user-bubble {
  position: relative;
  right: -9%;
}

.user-avatar {
  position: relative;
  right: -100%;
}
</style>