import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";


export default function Spinner({ navigation }) {

  setTimeout(function() {
    navigation.navigate("Roulette")
  }, 1500)

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://c6.staticflickr.com/6/5662/30514668293_d33f88e921_b.jpg"
        }}
        style={{ width: "100%", height: "100%"}}
      />
      <View style={{position:"absolute", top:"0%", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0, 0.4)", color:"white"}}>
        <Text style={{fontFamily:"Helvetica", fontSize:34, color:"white", marginTop:"15%", marginLeft:"5%", textAlign:"left", fontWeight:"600"}}>
          Hang tight.{"\n"}
          We're placing your bet!
        </Text>
        <Image source={require('../assets/new1.gif')}
               style={{position:"absolute", left:"22%", top:"40%", width:"56%", height:"26%"}}
               onPress={() => navigation.navigate("Roulette")}/>
      </View>
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
})