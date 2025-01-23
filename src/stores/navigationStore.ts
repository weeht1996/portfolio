// stores/navigationStore.ts
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    selectedIndex: null as number | null,
  }),
  actions: {
    setSelectedIndex(index: number) {
      this.selectedIndex = index
    },
  },
})
