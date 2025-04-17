import GameModeSelector from "@/pages/game-preparation/GameModeSelector";
import PlayerCountSelector from "@/components/PlayerCountSelector";
import RematchToggle from "@/pages/game-preparation/RematchToggle";
import { View, Text, StyleSheet } from "react-native";
import { useGamePreparationStore } from "@/store/gamePreparationStore";
import { GAME_MODE } from "@/constants/common";
import InfoText from "@/components/InfoText";
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
import { router } from "expo-router";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;

function GamePreparationScreen() {
  const {
    playerCount,
    gameMode,
    rematch,
    setPlayerCount,
    setGameMode,
    setRematch,
  } = useGamePreparationStore();

  function handleNext() {
    router.push("/character-assignment");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>게임 준비</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>참여 인원 선택</Text>
        <PlayerCountSelector
          count={playerCount}
          min={MIN_PLAYERS}
          max={MAX_PLAYERS}
          onChange={setPlayerCount}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>게임 모드 선택</Text>
        <GameModeSelector mode={gameMode} onSelect={setGameMode} />
        <InfoText
          text={
            gameMode === GAME_MODE.LOSER
              ? "패자 결정: 가장 낮은 점수를 획득한 플레이어가 패자가 됩니다."
              : "승자 결정: 가장 높은 점수를 획득한 플레이어가 승자가 됩니다."
          }
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>게임 설정</Text>
        <RematchToggle enabled={rematch} onToggle={setRematch} />
        <InfoText
          text={`동점자가 발생할 경우 재경기를 진행할지 여부를 설정합니다. 재경기를 하지 않을 경우 여러 ${
            gameMode === GAME_MODE.LOSER ? "패자" : "승자"
          }가 발생할 수 있습니다.`}
        />
      </View>
      <NavigationButtonGroup onPress={handleNext} />
    </View>
  );
}

export default GamePreparationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 32,
    maxWidth: 480,
    width: "100%",
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 24,
    textAlign: "center",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    marginBottom: 12,
  },
});
