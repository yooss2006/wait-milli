import { GAME_MODE } from "@/constants/common";
import { GameMode } from "@/types/common";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface GameModeSelectorProps {
  mode: GameMode;
  onSelect: (mode: GameMode) => void;
}

function GameModeSelector({ mode, onSelect }: GameModeSelectorProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onSelect(GAME_MODE.LOSER)}
        accessibilityLabel="패자 결정 모드 선택"
        style={[
          styles.button,
          {
            borderColor: mode === GAME_MODE.LOSER ? "#007aff" : "#ddd",
            backgroundColor: mode === GAME_MODE.LOSER ? "#007aff" : "#f8f8f8",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: mode === GAME_MODE.LOSER ? "#fff" : "#555" },
          ]}
        >
          패자 결정
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSelect(GAME_MODE.WINNER)}
        accessibilityLabel="승자 결정 모드 선택"
        style={[
          styles.button,
          {
            borderColor: mode === GAME_MODE.WINNER ? "#007aff" : "#ddd",
            backgroundColor: mode === GAME_MODE.WINNER ? "#007aff" : "#f8f8f8",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: mode === GAME_MODE.WINNER ? "#fff" : "#555" },
          ]}
        >
          승자 결정
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default GameModeSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginLeft: 5,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
