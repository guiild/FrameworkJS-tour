import { ref } from "vue"
import { useMenuStore } from "../stores/menu.store"

export const useMenu = () => {
  const menuStore = useMenuStore()

  const newItemName = ref("")

  const add = () => {
    if (!newItemName.value) {
      return
    }

    menuStore.add(newItemName.value)
    newItemName.value = ""
  }

  return {
    add,
    newItemName,
  }
}
