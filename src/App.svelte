<script lang="ts">
  import Cart from "./lib/Cart.svelte";
  import CreateItem from "./lib/CreateItem.svelte";
  import Store from "./lib/Store.svelte";

  let items: App.Item[] = [];

  function createItem(ev) {
    const item = ev.detail as App.Item;
    items = [...items, item];
  }
</script>

<header>
  <h1>Framework JS Svelte</h1>
</header>

<main>
  <CreateItem on:createItem={createItem} />
  <Store {items} />
  <Cart />
</main>

<style>
  header {
    background-color: var(--primary);
    color: white;
    padding: 1rem;
    text-align: center;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
    max-width: 75ch;
    padding: 1rem;
  }
</style>
