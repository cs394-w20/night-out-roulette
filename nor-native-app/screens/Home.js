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

      <Text style={{position:"absolute", fontFamily:"Helvetica", fontSize:40, color:"white", top:"10%", textAlign:"center", fontWeight:"900"}}>Night Out Roulette!</Text>
      
      <TouchableOpacity
        onPress={() => navigation.navigate("Cuisine")}
        style={{position:"absolute", bottom:"15%", left:"20%"}}>
          
          <Text style={{position:"absolute", color:"#F3B531", fontSize:30, fontWeight:"900"}}>Let's go for a spin!</Text>
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
