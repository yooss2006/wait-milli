import { View, Text, StyleSheet, Image } from "react-native";
import AssignmentGuide from "./assignment-guide";
import CharacterAssignmentList from "./character-assignment-list";
import PrevButton from "./prev-button";
import NextButton from "./next-button";
import { useGamePreparationStore } from "@/store/gamePreparationStore";
import { getRandomAnimals } from "@/utils/animal";
import { ANIMAL_IMAGES } from "@/constants/animal";

export default function CharacterAssignmentScreen() {
  const { playerCount } = useGamePreparationStore();
  const assignments = getRandomAnimals(playerCount);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>동물 선택</Text>
      <AssignmentGuide />
      {/* <CharacterAssignmentList assignments={assignments} /> */}
      <View style={styles.buttonRow}>
        <PrevButton />
        <NextButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 40,
    paddingHorizontal: 30,
    boxSizing: "border-box",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
    marginBottom: 15,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 25,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 20,
  },
});
