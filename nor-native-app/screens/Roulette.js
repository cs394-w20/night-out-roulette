import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import GetRestaurant from '../components/Choose'

export default function Roulette({ navigation, route }) {
  displayRestaurant = false;
  return (
    <button display={displayRestaurant ? "none" : "block"} onClick={displayRestaurant = true}>Where's My Night Out?</button>
    <View display={displayRestaurant ? "block" : "none"} style={styles.container}>
      <Text>{GetRestaurant(route.params.cuisine, route.params.price)['name']}</Text>
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
