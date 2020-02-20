import React from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      
      <Image
        source={{
          uri:
            "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2016/02/08144658/shutterstock_351380480.jpg"
        }}
        style={{position:"absolute", width: "100%", height: "100%", opacity:1}}
      />

      <Text style={{position:"relative", fontSize:40, color:"white", bottom:"37.5%", textAlign:"center", fontWeight:"900"}}>Night Out Roulette!</Text>
      
      <TouchableOpacity
        onPress={() => navigation.navigate("Cuisine")}
        style={{position:"relative", top:"35%", zIndex:1}}>
          
          <Text style={{position:"relative", color:"#F3B531", fontSize:30, fontWeight:"900"}}>Let's go for a spin!</Text>
      </TouchableOpacity>

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
