import { View, Text, Switch, StyleSheet } from "react-native";

interface RematchToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

function RematchToggle({ enabled, onToggle }: RematchToggleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>동점자 재경기</Text>
      <Switch
        value={enabled}
        onValueChange={onToggle}
        trackColor={{ false: "#ccc", true: "#007aff" }}
        thumbColor={enabled ? "#fff" : "#f4f3f4"}
      />
    </View>
  );
}

export default RematchToggle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: "#444",
  },
});
