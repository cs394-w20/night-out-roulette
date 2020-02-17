import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function Roulette({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Your Restaurant for tonight is Dave's New Kitchen!</Text>
      <Image
        source={{
          uri:
            "https://media-cdn.tripadvisor.com/media/photo-s/14/f0/10/b7/photo0jpg.jpg"
        }}
        style={{ width: 400, height: 400 }}
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
