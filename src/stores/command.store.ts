import { defineStore } from "pinia"
import { MenuItem } from "../services/model"

export const useCommandStore = defineStore("command", {
  state: () => ({ items: {} as Record<string, number> }),
  actions: {
    add(menuItem: MenuItem) {
      const newItems = {...this.items}

      if(newItems[menuItem]) {
        ++newItems[menuItem]
      } else {
        newItems[menuItem] = 1
      }

      this.items = newItems
    },
    remove(menuItem: MenuItem) {
      const newItems = {...this.items}
      
      if(newItems[menuItem] > 1) {
        --newItems[menuItem]
      } else {
        delete newItems[menuItem]
      }
      
      this.items = newItems
    },
    send() {
      this.items = {}
    },
  },
})
