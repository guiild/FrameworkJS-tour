import { defineStore } from "pinia"
import { listMenuItems, addMenuItem, removeMenuItem } from "../services/menu"

export const useMenuStore = defineStore('menu', {
  state: () => ({ menu: [] as string[] }),
  actions: {
    async loadStore() {
      const menuItems = await listMenuItems()
      this.menu = menuItems;
    },
    async add(item: string) {
      await addMenuItem(item)
      await this.loadStore()
    },
    async remove(item: string) {
      await removeMenuItem(item)
      await this.loadStore()
    }

  },
})