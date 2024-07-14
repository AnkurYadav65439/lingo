import { create } from "zustand"

type HeartsModalStatus = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useHeartsModalState = create<HeartsModalStatus>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));