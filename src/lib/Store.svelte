<script lang="ts">
  import List from "./List.svelte";
  import cart from "./cart";

  const headers: App.Header[] = [
    { key: "name", title: "Name" },
    { key: "price", title: "Price" },
  ];
  export let items: App.Item[] = [];
</script>

<List {items} {headers} let:item>
  <button on:click={() => cart.add(item)}>Add</button>
</List>
