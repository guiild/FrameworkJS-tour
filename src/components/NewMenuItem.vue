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
import { ref } from "vue"
import { useMenuStore } from "../stores/menu.store"

const menuStore = useMenuStore()

const newItemName = ref("")

const add = () => {
  if (!newItemName.value) {
    return
  }

  menuStore.add(newItemName.value)
  newItemName.value = ''
}
</script>

<style scoped>
input {
  padding: 0.5em;
  min-width: 183px;
}
</style>
