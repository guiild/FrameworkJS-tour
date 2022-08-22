<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import Menu from './components/Menu.vue';
import { useCommandStore } from './stores/command.store';
import { useMenuStore } from './stores/menu.store';
import Command from './components/Command.vue';


const menuStore = useMenuStore()

menuStore.loadStore()

const menu = computed(() => menuStore.menu)
</script>

<template>
  <div class="app">
    <h1>
      Multi App
    </h1>
    <Menu :menu="menu" />
    <h2>
      Current command
    </h2>
    <Command/>
  </div>
</template>


<style scoped>
.app {
  margin: auto;
  width: 80%;
}

::v-deep button{
  cursor: pointer;
  padding: 0.5em;
  margin: 0.2em;
}
</style>