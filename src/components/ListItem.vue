<template>
  <div>
    <slot></slot>
    <button @click="emit('remove')">Delete</button>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['remove'])
</script>