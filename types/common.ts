import { GAME_MODE } from "@/constants/common";

export type GameMode = (typeof GAME_MODE)[keyof typeof GAME_MODE];
