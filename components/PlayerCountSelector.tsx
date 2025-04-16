import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface PlayerCountSelectorProps {
  count: number;
  min: number;
  max: number;
  onChange: (count: number) => void;
}

function PlayerCountSelector({
  count,
  min,
  max,
  onChange,
}: PlayerCountSelectorProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => count > min && onChange(count - 1)}
        disabled={count <= min}
        style={[styles.button, { opacity: count <= min ? 0.5 : 1 }]}
        accessibilityLabel="인원수 감소"
      >
        <Text
          style={[
            styles.angleBracketText,
            { color: count <= min ? "#ccc" : "#007aff" },
          ]}
        >
          {"<"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity
        onPress={() => count < max && onChange(count + 1)}
        disabled={count >= max}
        style={[styles.button, { opacity: count >= max ? 0.5 : 1 }]}
        accessibilityLabel="인원수 증가"
      >
        <Text
          style={[
            styles.angleBracketText,
            { color: count >= max ? "#ccc" : "#007aff" },
          ]}
        >
          {">"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default PlayerCountSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    padding: 10,
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    marginHorizontal: 20,
    minWidth: 60,
    textAlign: "center",
  },
  angleBracketText: {
    fontSize: 32,
  },
});
