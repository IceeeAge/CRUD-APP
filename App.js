import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Addpost from "./app/Screens/Addpost";
import Home from "./app/Screens/HomeScreen/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
