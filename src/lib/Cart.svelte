<script lang="ts">
  import List from "./List.svelte";
  import cart from "./cart";

  const headers: App.Header[] = [
    { key: "name", title: "Name" },
    { key: "quantity", title: "Quantity" },
  ];

  let orderSent;
  function sendOrder() {
    orderSent = new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
</script>

<List items={$cart.items} {headers} let:item>
  <button on:click={() => cart.add(item)}>Add</button>
  <button on:click={() => cart.remove(item)}>Remove</button>
</List>

<div>
  <p>Total price: {$cart.total}</p>
  <button on:click={sendOrder}>Send Order</button>
</div>

{#if orderSent}
  {#await orderSent}
    <p>Sending order</p>
  {:then _}
    <p>Order received</p>
  {:catch _}
    <p>Error !!</p>
  {/await}
{/if}

<style>
  div {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
  p {
    font-weight: 600;
  }
</style>
