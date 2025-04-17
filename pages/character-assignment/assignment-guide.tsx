import { Text, StyleSheet } from "react-native";

export default function AssignmentGuide() {
  return (
    <Text style={styles.guide}>
      참가자는 각자 마음에 드는{"\n"}동물을 선택해주세요!
    </Text>
  );
}

const styles = StyleSheet.create({
  guide: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 24,
  },
});
