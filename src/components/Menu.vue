<template>
  <div class="menu">
    <NewMenuItem></NewMenuItem>
    <MenuItem
      v-for="menuItem in menu"
      :key="menuItem"
      :menu-item="menuItem"
    ></MenuItem>
  </div>
</template>

<script setup lang="ts">
import { Menu } from "../services/model"
import NewMenuItem from "./NewMenuItem.vue"
import MenuItem from "./MenuItem.vue"

interface Props {
  menu: Menu
}

defineProps<Props>()
</script>

<style scoped>
.menu form {
  margin-bottom: 2em;
}
</style>
