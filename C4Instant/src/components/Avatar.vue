<script setup lang="ts">
defineProps<{
  size: number
  src: string
}>()

</script>

<template>
  <div class="avatar-container">
    <img :src="src" alt="avatar" class="avatar" :style="{width: size + 'px', height: size + 'px'}"/>
  </div>
</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>