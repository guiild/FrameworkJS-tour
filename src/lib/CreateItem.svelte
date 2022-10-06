<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function handleSubmit(ev: SubmitEvent) {
    const form = ev.target as HTMLFormElement;
    const name = form.elements["name"].value;
    const price = form.elements["price"].value;

    dispatch("createItem", { name, price });

    form.reset();
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    <span>Name</span>
    <input name="name" />
  </label>
  <label>
    <span>Price</span>
    <input name="price" type="number" value="2" />
  </label>
  <button>Add</button>
</form>

<style>
  form,
  label {
    align-items: center;
    display: flex;
  }

  label {
    flex-direction: column;
    width: 100%;
  }

  form {
    gap: 0.5rem;
  }

  span {
    font-weight: 600;
  }

  input {
    padding: 0.25rem 0.5rem;
    width: 100%;
  }
  button {
    align-self: flex-end;
  }
</style>
