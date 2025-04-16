import { GAME_MODE } from "@/constants/common";
import { GameMode } from "@/types/common";
import { create } from "zustand";

interface GamePreparationState {
  playerCount: number;
  gameMode: GameMode;
  rematch: boolean;
  setPlayerCount: (count: number) => void;
  setGameMode: (mode: GameMode) => void;
  setRematch: (rematch: boolean) => void;
}

export const useGamePreparationStore = create<GamePreparationState>((set) => ({
  playerCount: 3,
  gameMode: GAME_MODE.LOSER,
  rematch: true,
  setPlayerCount: (playerCount) => set({ playerCount }),
  setGameMode: (gameMode) => set({ gameMode }),
  setRematch: (rematch) => set({ rematch }),
}));
