import { View, Text, StyleSheet } from "react-native";

interface Props {
  text: string;
}

function InfoText({ text }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>ⓘ</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default InfoText;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: "#f0f7ff",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#007aff",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    color: "#007aff",
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    color: "#444",
    fontSize: 15,
  },
});
