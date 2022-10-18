import { useContext } from "solid-js"
import { MenuItem as MenuItemModel } from "../services/model"
import { MenuContext } from "../store/menu.store"
import { OrderContext } from "../store/order.store"
import "./menu-item.style.css"

interface Props {
  menuItem: MenuItemModel
}

function MenuItem({ menuItem }: Props) {
  const [_, { add }] = useContext(OrderContext)

  return (
    <div class="menu-item-wrapper">
      <span>{menuItem}</span>
      <button onClick={() => add(menuItem)}>Add</button>
      <button>Delete</button>
    </div>
  )
}

export default MenuItem
