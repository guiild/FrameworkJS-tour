import {
  Accessor,
  createContext,
  createSignal,
  ParentComponent,
} from "solid-js"
import { MenuItem } from "../services/model"

interface State {
  items: Record<MenuItem, number>
}

type Context = [
  state: Accessor<Record<MenuItem, number>>,
  actions: {
    add: (item: MenuItem) => void
    remove: (item: MenuItem) => void
    sendOrder: () => void
  },
]

export const OrderContext = createContext<Context>([
  () => ({}),
  { add: () => {}, remove: () => {}, sendOrder: () => {} },
])

export const OrderProvider: ParentComponent = (props) => {
  const [items, setItems] = createSignal<Record<MenuItem, number>>({})

  const store: Context = [
    items,
    {
      add: (menuItem) => {
        const newItems = { ...items() }

        if (newItems[menuItem]) {
          ++newItems[menuItem]
        } else {
          newItems[menuItem] = 1
        }

        setItems(newItems)
      },
      remove: (menuItem) => {
        const newItems = { ...items() }

        if (newItems[menuItem] > 1) {
          --newItems[menuItem]
        } else {
          delete newItems[menuItem]
        }

        setItems(newItems)
      },
      sendOrder: () => {
        setItems({})
      },
    },
  ]

  return (
    <OrderContext.Provider value={store}>
      {props.children}
    </OrderContext.Provider>
  )
}
