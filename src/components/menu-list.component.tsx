import { For, useContext } from "solid-js"
import { MenuItem as MenuItemModel } from "../services/model"
import { MenuContext } from "../store/menu.store"
import MenuItem from "./menu-item.component"

const MenuList = () => {
  const [state] = useContext(MenuContext)
  return (
    <For each={state.items}>
      {(menuItem) => <MenuItem menuItem={menuItem} />}
    </For>
  )
}

export default MenuList
