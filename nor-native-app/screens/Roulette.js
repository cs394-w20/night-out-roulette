import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Linking, Platform, TouchableOpacity, BackHandler } from "react-native";

export default function Roulette({ navigation, route }) {
  const [restaurant, setRestaurant] = useState(route.params.restaurant)
  const [rerolls, setrerolls] = useState(route.params.rerolls)

  function goHome() {
    navigation.navigate('Home');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', goHome);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", goHome);
    };
  }, [])

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
        <View style={{position:"absolute", paddingTop:"5%", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0, 0.4)", color:"white", flexDirection:"column", alignItems:"center"}}>
        <Text style={{position:'relative', flex:1, top:"5%", fontSize:34, color:"white", textAlign:"left", fontWeight:"600"}}>
            No matches found.
          </Text>
          <Text style={{flex:2.5}}/>
          <View style={{flex: 1.25, top:"17%", width:"70%", flexDirection:'row'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cuisine')}
              style={styles.button}>
                <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", fontWeight:"900"}}>
                  Try Again?
                </Text>
            </TouchableOpacity>
          </View>
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
      <View style={{position:"absolute", paddingTop:"5%", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0, 0.4)", color:"white", flexDirection:"column", alignItems:"center"}}>
        <Text style={{position:'relative', flex:1, top:"5%", fontSize:34, color:"white", textAlign:"left", fontWeight:"600"}}>
          We Picked a Winner!
        </Text>

        {/* Name and Address */}
        <Text style={{flex:1, fontSize:25, position:"relative", backgroundColor:"rgba(0,0,0, 0.6)", bottom:"3%", paddingVertical:"5%", width:"100%", color:"white", textAlign:"center"}}>
            <Text style={{textTransform:"uppercase", fontWeight:"bold", fontSize:35}}>{restaurant['name']}</Text>{"\n"}
          {restaurant['location']['display_address'][0]}{"\n"}
          {restaurant['location']['display_address'][1]}
        </Text>

        <View style={{flex:1.5, flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: "100%"}}>
        </View>

        {rerolls < 2 ? 
        <View style={{flex: 1.25, top:"15%", flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => openRestaurant(restaurant['location']['display_address'])}
            style={styles.button}>
              <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", fontWeight:"900"}}>
                Let's go!
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("TODO: Populate this function")}
            style={styles.button2}>
              <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", fontWeight:"900"}}>
                Reroll?
              </Text>
          </TouchableOpacity>
        </View>

        : 
        
        <View style={{flex: 1.25, top:"15%", width:"70%", flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() => openRestaurant(restaurant['location']['display_address'])}
            style={styles.button}>
              <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", fontWeight:"900"}}>
                Let's go!
              </Text>
          </TouchableOpacity>
        </View>
        }
      </View>
    </View>
  );
}

{/* <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", top:"35%", width:"100%", textAlign:"center", fontWeight:"500"}}
          onPress={() => {openRestaurant(restaurant['location']['display_address'])}}
        >
          TAKE ME THERE!
        </Text> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flex:1,
    marginHorizontal:'5%',
    height: '40%',
    backgroundColor: 'rgba(33, 125, 73, 1.0)',
    padding:10,
    borderRadius: 50
  },
  button2: {
    flex:1,
    marginHorizontal:'5%',
    height: '40%',
    backgroundColor: 'rgba(125, 33, 125, 1.0)',
    padding:10,
    borderRadius: 50
  },
});

function openRestaurant(display_address) {
  var address = '';
  address += display_address[0];
  Linking.openURL(Platform.select({ ios: 'maps:0,0?q='+address, android: 'geo:0,0?q='+address}));
}
