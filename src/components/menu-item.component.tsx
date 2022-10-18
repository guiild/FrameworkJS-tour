import { useContext } from "solid-js"
import { MenuItem as MenuItemModel } from "../services/model"
import { MenuContext } from "../store/menu.store"
import { OrderContext } from "../store/order.store"
import "./menu-item.style.css"

interface Props {
  menuItem: MenuItemModel
}

function MenuItem({ menuItem }: Props) {
  const [menuState, { remove }] = useContext(MenuContext)
  const [_, { add }] = useContext(OrderContext)

  const addOrderItem = () => add(menuItem)
  const removeMenuItem = () => remove(menuItem)

  return (
    <div class="menu-item-wrapper">
      <span>{menuItem}</span>
      <button onClick={addOrderItem}>Add</button>
      <button onClick={removeMenuItem}>Delete</button>
    </div>
  )
}

export default MenuItem
