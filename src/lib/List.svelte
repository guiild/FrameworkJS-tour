<script lang="ts">
  import { fly } from "svelte/transition";
  export let items: App.Item[] = [];
  export let headers: App.Header[] = [];
</script>

<table>
  <tr>
    {#each headers as header}
      <th>{header.title}</th>
    {/each}
    <th>Actions</th>
  </tr>

  {#each items as item}
    <tr in:fly={{ x: -500, duration: 1500 }} out:fly={{ y: -500 }}>
      {#each headers as header}
        <td>{item[header.key]}</td>
      {/each}
      <td><slot {item} /></td>
    </tr>
  {:else}
    <tr><td colspan="3" class="empty">The list is empty</td></tr>
  {/each}
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    border-block-end: 2px solid var(--primary);
    font-weight: 600;
  }
  td {
    padding: 0.25rem;
    text-align: center;
  }
  tr + tr {
    border-block-start: 2px solid var(--primary-2);
  }

  .empty {
    padding: 2rem;
    font-size: 1.5rem;
  }
</style>
