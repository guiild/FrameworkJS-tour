import MenuList from "./components/menu-list.component"
import NewMenuItem from "./components/new-menu-item.component"
import Order from "./components/order.component"
import { MenuProvider } from "./store/menu.store"
import { OrderProvider } from "./store/order.store"

function App() {
  return (
    <MenuProvider>
      <OrderProvider>
        <h1>FrameworkJS Tour</h1>
        <h2>SOLID</h2>
        <NewMenuItem></NewMenuItem>
        <MenuList />
        <Order />
      </OrderProvider>
    </MenuProvider>
  )
}

export default App
