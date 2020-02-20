import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";

export default function Roulette({ navigation, route }) {
  const [restaurant, setRestaurant] = useState(route.params.restaurant)

  if(!restaurant) {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://c6.staticflickr.com/6/5662/30514668293_d33f88e921_b.jpg"
          }}
          style={{ width: "100%", height: "100%"}}
        />
      <View style={{position:"absolute", top:"0%", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0, 0.4)", color:"white", justifyContent:"center"}}>
          <Text style={{position:'relative', bottom:'40%', left:"10%", fontSize:34, color:"white", textAlign:"left", fontWeight:"600"}}>
            No matches found.
          </Text>
        </View>
      </View>
    );
  };

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
        <Text style={{fontSize:35, color:"white", marginTop:"15%", textAlign:"center", fontWeight:"600"}}>
          We Picked a Winner!
        </Text>

        {/* Name and Address */}
        <Text style={{fontSize:25, position:"relative", top:"2.5%", backgroundColor:"rgba(0,0,0, 0.7)", padding:"8%", color:"white", textAlign:"center"}}>
            <Text style={{textTransform:"uppercase", fontWeight:"bold", fontSize:35}}>{restaurant['name']}</Text>{"\n"}
          {restaurant['location']['display_address'][0]}{"\n"}
          {restaurant['location']['display_address'][1]}
        </Text>
        

        <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", top:"35%", width:"100%", textAlign:"center", fontWeight:"500"}}
          onPress={() => {openRestaurant(restaurant['location']['display_address'])}}
        >
          TAKE ME THERE!
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
});

function openRestaurant(display_address) {
  var address = '';
  for(d in display_address) {
    address += d.replace(' ', '+');
  }
  Linking.openURL(Platform.select({ ios: 'maps:0,0?q='+address, android: 'geo:0,0?q='+address}));
}
