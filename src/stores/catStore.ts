import { CatImage, Vote } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CatStoreState {
  cats: CatImage[];
  userVotes: Record<string, number>;
  selectedCat: CatImage | null;
  subId: string;
  isDarkMode: boolean;
  myVotes: Vote[];

  setCats: (cats: CatImage[]) => void;
  setUserVote: (imageId: string, value: number) => void;
  setSelectedCat: (cat: CatImage | null) => void;
  setSubId: (subId: string) => void;
  toggleDarkMode: () => void;
  setMyVotes: (votes: Vote[]) => void;
}

export const useCatStore = create<CatStoreState>()(
  persist(
    (set) => ({
      cats: [],
      userVotes: {},
      selectedCat: null,
      subId: '',
      isDarkMode: false,
      myVotes: [],

      setCats: (cats) => set({ cats }),
      setUserVote: (imageId, value) =>
        set((state) => ({
          userVotes: { ...state.userVotes, [imageId]: value },
        })),
      setSelectedCat: (cat) => set({ selectedCat: cat }),
      setSubId: (subId) => set({ subId }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setMyVotes: (votes) => set({ myVotes: votes }),
    }),
    {
      name: 'cat-voting-store',
      partialize: (state) => ({
        subId: state.subId,
        isDarkMode: state.isDarkMode,
        userVotes: state.userVotes,
      }),
    }
  )
);
