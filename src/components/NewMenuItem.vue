<template>
  <form @submit.prevent="add">
    <input
      type="text"
      name="new-item"
      required
      placeholder="New Menu item"
      v-model="newItemName"
    />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { useMenu } from "../composables/use-menu"

const { add, newItemName } = useMenu()
</script>

<style scoped>
form {
  margin-bottom: 2em;
}

input {
  padding: 0.5em;
  min-width: 183px;
}
</style>
