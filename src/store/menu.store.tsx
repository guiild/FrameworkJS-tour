import { createContext, ParentComponent } from "solid-js"
import { createStore } from "solid-js/store"
import { addMenuItem, listMenuItems } from "../services/menu"
import { MenuItem } from "../services/model"

interface State {
  items: MenuItem[]
}

type Context = [
  state: State,
  actions: { add: (itemName: string) => void; load: () => void },
]

export const MenuContext = createContext<Context>([
  { items: [] },
  { add: () => {}, load: () => {} },
])

export const MenuProvider: ParentComponent = (props) => {
  const [state, setState] = createStore<State>({ items: [] })

  listMenuItems().then((items) => setState("items", items))

  const store: Context = [
    state,
    {
      load: async () => {
        const items = await listMenuItems()
        setState("items", items)
      },
      add: async (itemName) => {
        await addMenuItem(itemName)
        setState("items", await listMenuItems())
      },
    },
  ]

  return (
    <MenuContext.Provider value={store}>{props.children}</MenuContext.Provider>
  )
}
