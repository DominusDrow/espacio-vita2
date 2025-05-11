// app/store/drawerStore.ts
import { create } from 'zustand';

interface DrawerState {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
}));

export default useDrawerStore;
