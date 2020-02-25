import React, {useState} from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  const [state, setstate] = useState({lat:42.05784,lon:-87.67614})
  if(!state) {
    navigator.geolocation.getCurrentPosition(position => setstate({lat: position.coords.latitude, lon: position.coords.longitude}))
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
      
      <View style={{top:"35%", width:"80%"}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cuisine", {...state})}
          style={styles.button}>
            
            <Text style={{position:"relative", color:"rgba(220,220,220, 1)", textAlign:"center", fontSize:24, fontWeight:"900"}}>
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
