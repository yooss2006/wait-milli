import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import type { Animal } from "@/types/animal";

interface Props {
  assignments: Animal[];
}

export default function CharacterAssignmentList({ assignments }: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.grid}
      showsVerticalScrollIndicator={false}
    >
      {assignments.map(({ image, key, name }, idx) => {
        return (
          <View style={styles.card} key={key + idx}>
            <Image source={image} style={styles.image} resizeMode="contain" />
            <Text style={styles.character}>{name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
    width: "100%",
    marginBottom: 30,
    padding: 5,
  },
  card: {
    width: 120,
    aspectRatio: 1,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  character: {
    fontSize: 17,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
});
