import { ANIMAL } from "@/constants/animal";
import type { AnimalType } from "@/types/animal";

export function getRandomAnimals(count: number) {
  const animalKeys = Object.keys(ANIMAL);
  const shuffled = animalKeys.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((animal) => ANIMAL[animal as AnimalType]);
}
