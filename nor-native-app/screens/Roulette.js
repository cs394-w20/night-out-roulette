import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Roulette({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://www.marineroom.com/resourcefiles/homeimages/the-marine-room-restaurant-in-la-jolla-top11.jpg"
        }}
        style={{ width: "100%", height: "100%"}}
      />
      <View style={{position:"absolute", top:"0%", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0, 0.4)", color:"white"}}>
        <Text style={{fontFamily:"Helvetica", fontSize:35, color:"white", marginTop:"15%", textAlign:"center", fontWeight:"600"}}>
          We Picked a Winner!
        </Text>

        {/* Name and Address */}
        <Text style={{fontSize:25, position:"relative", top:"28%", backgroundColor:"rgba(0,0,0, 0.7)", padding:"8%", fontFamily:"Helvetica", color:"white", textAlign:"center"}}>
            <Text style={{textTransform:"uppercase", fontWeight:"bold", fontSize:35}}>Ten Mile House</Text>{"\n"}
          1700 Central St{"\n"}
          Evanston, IL
        </Text>
        

        <Text style={{position:"absolute", fontFamily:"Helvetica", fontSize:24, color:"rgba(220,220,220, 1)", top:"60%", width:"100%", textAlign:"center", fontWeight:"500"}}
          onPress={() => {alert('Jump to default mapping application')}}
        >
          TAKE ME THERE!
        </Text>


        <Text style={{position:"absolute", fontFamily:"Helvetica", fontSize:24, color:"rgba(220,220,220, 1)", bottom:"10%", width:"100%", textAlign:"center", fontWeight:"500"}}
          onPress={() => {navigation.navigate("Spinner")
          // Having to run same code for buggy reasons
            setTimeout(function() {
              navigation.navigate("Roulette")
            }, 2000)}}
        >
          Re-roll
        </Text>
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