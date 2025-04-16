import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface NextButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

function NavigationButtonGroup({ onPress, disabled }: NextButtonProps) {
  return (
    <View style={styles.navigation}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          { backgroundColor: disabled ? "#ccc" : "#007aff" },
        ]}
        accessibilityLabel="다음"
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NavigationButtonGroup;

const styles = StyleSheet.create({
  navigation: {
    marginTop: "auto",
  },
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 24,
    width: "100%",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
