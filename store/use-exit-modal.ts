import { create } from "zustand"

type ExitModalStatus = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useExitModalState = create<ExitModalStatus>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));