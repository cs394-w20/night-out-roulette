import React, {useState} from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {

  const SurpriseMe = () => {
    return {
      cuisine: ["newamerican", "bbq", "Chinese", "French", "burgers", "indpak", "Italian", "Japanese", "Mexican", "pizza", "seafood", "steak", "sushi", "thai"],
      price: ["$$","$$$"],
      distance: "5",
      time: "Now",
      rerolls: 0
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2016/02/08144658/shutterstock_351380480.jpg"
        }}
        style={{position:"absolute", width: "100%", height: "100%", opacity:1}}
      />

      <Text style={{position:"relative", fontSize:40, color:"white", bottom:"35%", textAlign:"center", fontWeight:"900"}}>
        Night Out Roulette!
      </Text>
      
      <View style={{top:"38%", width:"80%"}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Spinner', SurpriseMe())}
          // style={styles.button}
          style={{backgroundColor:"#FFC400", padding:"3%", borderRadius:"50%"}}
          >
            <Text style={{position:"relative", color:"#FE0008", textAlign:"center", fontSize:24, fontWeight:"900"}}>
              Surprise me!
            </Text>
        </TouchableOpacity>
      </View>

      <View style={{top:"25%", width:"80%"}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cuisine")}
          style={{backgroundColor:"#01ABE7", padding:"3%", borderRadius:"50%"}}>
            
            <Text style={{position:"relative", color:"white", textAlign:"center", fontSize:24, fontWeight:"900"}}>
              Let's go for a spin!
            </Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: 'rgba(33, 125, 73, 1.0)',
    padding:10,
    borderRadius: 50
  },
});
