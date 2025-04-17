import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PrevButton() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.text}>이전</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6c757d",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 28,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
