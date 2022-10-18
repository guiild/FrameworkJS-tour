import { For, useContext } from "solid-js"
import { OrderContext } from "../store/order.store"

const Order = () => {
  const [state, { remove, sendOrder }] = useContext(OrderContext)

  const items = () =>
    Object.keys(state()).map((k) => ({ item: k, quantity: state()[k] }))

  return (
    <div>
      <h2>Commandes</h2>
      <For each={items()}>
        {({ item, quantity }) => (
          <div>
            {item} | {quantity}{" "}
            <button onClick={() => remove(item)}>Remove</button>
          </div>
        )}
      </For>
      <button onClick={() => sendOrder()}>Send</button>
    </div>
  )
}

export default Order
