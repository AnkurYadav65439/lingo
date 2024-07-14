import { create } from "zustand"

type PracticeModalStatus = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const usePracticeModalState = create<PracticeModalStatus>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));