import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { generateWord } from "@myapp/utils";
import { useQuery } from "@myapp/convex";

export default function Home() {
  const word = useQuery("speak");
  return (
    <View style={styles.container}>
      <Text>Convex Word: {word || "loading..."}</Text>
      <Text>Client Word: {generateWord() || "loading..."}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
