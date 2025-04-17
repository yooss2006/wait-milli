import { ANIMAL } from "@/constants/animal";
import type { ImageSourcePropType } from "react-native";

export interface Animal {
  image: ImageSourcePropType;
  key: string;
  name: string;
}

export type AnimalType = keyof typeof ANIMAL;
