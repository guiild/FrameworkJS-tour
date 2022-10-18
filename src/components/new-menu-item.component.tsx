import { createSignal, useContext } from "solid-js"
import { MenuContext } from "../store/menu.store"
import "./new-menu-item.style.css"

function NewMenuItem() {
  const [newName, setNewName] = createSignal<string>("")

  const [state, { add }] = useContext(MenuContext)

  const formSubmit = async (event: Event) => {
    event.preventDefault()
    add(newName())
    setNewName("")
  }

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        name="new-item"
        onInput={(e) => setNewName((e.target as HTMLInputElement).value)}
        value={newName()}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewMenuItem
