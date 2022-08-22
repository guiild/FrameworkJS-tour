<template>
  <ListItem @remove="remove">
    <span>{{menuItem}}</span>
    <button @click="addToCommand">Add</button>
  </ListItem>
</template>

<script setup lang="ts">
import { MenuItem } from '../services/model';
import { useMenuStore } from '../stores/menu.store';
import { useCommandStore } from '../stores/command.store';
import ListItem from './ListItem.vue'


interface Props {
  menuItem : MenuItem
}

const props = defineProps<Props>()
const menuStore = useMenuStore()
const commandStore = useCommandStore()

const remove = () => {
  menuStore.remove(props.menuItem)
}

const addToCommand = () => {
  commandStore.add(props.menuItem)
}


</script>

<style scoped>
span {
  display: inline-block;
  margin-bottom: 1em;
  padding-bottom: 1em;
  min-width: 200px;
  border-bottom: 1px solid #ccc;
}
</style>