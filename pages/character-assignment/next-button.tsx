import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function NextButton() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.text}>다음</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007aff",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 28,
    flex: 1,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
