import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Night Out Roulette!</Text>
      <Button
        title="Begin Entering Your Preferences"
        onPress={() => navigation.navigate("Cuisine")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
