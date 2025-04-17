import { Animal } from "@/types/animal";

import type { ImageSourcePropType } from "react-native";

export const ANIMAL_IMAGES: Record<string, ImageSourcePropType> = {
  cat: require("@/assets/images/animal/고양이.png"),
  dog: require("@/assets/images/animal/강아지.png"),
  rabbit: require("@/assets/images/animal/토끼.png"),
  panda: require("@/assets/images/animal/판다.png"),
  fox: require("@/assets/images/animal/여우.png"),
  monkey: require("@/assets/images/animal/원숭이.png"),
  giraffe: require("@/assets/images/animal/기린.png"),
  mouse: require("@/assets/images/animal/생쥐.png"),
  sheep: require("@/assets/images/animal/양.png"),
  turtle: require("@/assets/images/animal/거북이.png"),
  tiger: require("@/assets/images/animal/호랑이.png"),
  hamster: require("@/assets/images/animal/햄스터.png"),
  elephant: require("@/assets/images/animal/코끼리.png"),
  kangaroo: require("@/assets/images/animal/캥거루.png"),
  goat: require("@/assets/images/animal/염소.png"),
  crocodile: require("@/assets/images/animal/악어.png"),
  cow: require("@/assets/images/animal/소.png"),
  lion: require("@/assets/images/animal/사자.png"),
  horse: require("@/assets/images/animal/말.png"),
  sparrow: require("@/assets/images/animal/참새.png"),
};

export const ANIMAL: Record<string, Animal> = {
  cat: {
    image: ANIMAL_IMAGES.cat,
    key: "cat",
    name: "고양이",
  },
  dog: {
    image: ANIMAL_IMAGES.dog,
    key: "dog",
    name: "강아지",
  },
  rabbit: {
    image: ANIMAL_IMAGES.rabbit,
    key: "rabbit",
    name: "토끼",
  },
  panda: {
    image: ANIMAL_IMAGES.panda,
    key: "panda",
    name: "판다",
  },
  fox: {
    image: ANIMAL_IMAGES.fox,
    key: "fox",
    name: "여우",
  },
  monkey: {
    image: ANIMAL_IMAGES.monkey,
    key: "monkey",
    name: "원숭이",
  },
  giraffe: {
    image: ANIMAL_IMAGES.giraffe,
    key: "giraffe",
    name: "기린",
  },
  mouse: {
    image: ANIMAL_IMAGES.mouse,
    key: "mouse",
    name: "생쥐",
  },
  sheep: {
    image: ANIMAL_IMAGES.sheep,
    key: "sheep",
    name: "양",
  },
  turtle: {
    image: ANIMAL_IMAGES.turtle,
    key: "turtle",
    name: "거북이",
  },
  tiger: {
    image: ANIMAL_IMAGES.tiger,
    key: "tiger",
    name: "호랑이",
  },
  hamster: {
    image: ANIMAL_IMAGES.hamster,
    key: "hamster",
    name: "햄스터",
  },
  elephant: {
    image: ANIMAL_IMAGES.elephant,
    key: "elephant",
    name: "코끼리",
  },
  kangaroo: {
    image: ANIMAL_IMAGES.kangaroo,
    key: "kangaroo",
    name: "캥거루",
  },
  goat: {
    image: ANIMAL_IMAGES.goat,
    key: "goat",
    name: "염소",
  },
  crocodile: {
    image: ANIMAL_IMAGES.crocodile,
    key: "crocodile",
    name: "악어",
  },
  cow: {
    image: ANIMAL_IMAGES.cow,
    key: "cow",
    name: "소",
  },
  lion: {
    image: ANIMAL_IMAGES.lion,
    key: "lion",
    name: "사자",
  },
  horse: {
    image: ANIMAL_IMAGES.horse,
    key: "horse",
    name: "말",
  },
  sparrow: {
    image: ANIMAL_IMAGES.sparrow,
    key: "sparrow",
    name: "참새",
  },
} as const;

export const ANIMAL_OPTIONS = Object.values(ANIMAL);
