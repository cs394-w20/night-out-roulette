import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, Linking, Platform } from "react-native";
import { REACT_APP_API_KEY } from "react-native-dotenv";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Roulette({ navigation, route }) {
  const [displayRestaurant, setDisplayRestaurant] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    var cuisine = route.params.cuisine;
    var price = route.params.price;
    let queryString = formQuery(cuisine, price)
    let responseData = [];
    fetch(queryString, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + REACT_APP_API_KEY
      }
    })
    .then(response => response.json())
    .then(response => {
      reponseData = response.businesses;

      const randomNum = Math.floor(Math.random() * responseData.length);

      const chosenRestaurant = reponseData[randomNum];

      console.log(chosenRestaurant);
      setRestaurant(chosenRestaurant)
    });
  }, []);

  if(!displayRestaurant || !restaurant) {
    return (
      <View style={styles.container}>
        <Button title= "Where's My Night Out?" onPress={() => setDisplayRestaurant(!displayRestaurant)}></Button>
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
          onPress={() => {var address = restaurant['location']['display_address'][0].replace(' ', '+') + restaurant['location']['display_address'][1].replace(' ', '+'); 
                                                      Linking.openURL(Platform.select({ ios: 'maps:0,0?q='+address, android: 'geo:0,0?q='+address }))}}
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
});

});

function formQuery(
  cuisine,
  price,
  term = "food",
  radius = "40000",
  limit = 5,
  latitude = 42.05784,
  longitude = -87.67614,
  open_now = true
) {
  let queryString = "https://api.yelp.com/v3/businesses/search?";

  queryString += ("term=" + term);
  queryString += ("&latitude=" + latitude);
  queryString += ("&longitude=" + longitude);
  queryString += ("&radius=" + radius);
  queryString += ("&limit=" + limit);                         // LIMIT OF NUMBER OF RESTAURANTS
  queryString += ("&categories=" + cuisine.toLowerCase());
  queryString += ("&price=" + price.length);
  queryString += ("&open_now=" + open_now); 

  return queryString;
  
}
