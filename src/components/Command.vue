<template>
  <ListItem v-for="[name, count] in commandItems" @remove="() => commandStore.remove(name)" :key="name">
    {{name}} {{count}}
  </ListItem>
  <button @click="() => commandStore.send()">Send order</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCommandStore } from '../stores/command.store';
import ListItem from './ListItem.vue';

const commandStore = useCommandStore()

const commandItems = computed(() => Object.entries(commandStore.items))

</script>