import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { REACT_APP_API_KEY } from "react-native-dotenv";

export default function Spinner({ navigation, route }) {

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    var cuisine = route.params.cuisine;
    var price = route.params.price;
    var distance = route.params.distance;
    let queryString = formQuery(cuisine, price, distance * 1600);
    let responseData = []
    console.log(queryString)
    fetch(queryString, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + REACT_APP_API_KEY
      }
    })
    .then(response => response.json())
    .then(response => {
      responseData = response.businesses;

      if(responseData.length === 0) {
        setRestaurant(false);
      }

      const randomNum = Math.floor(Math.random() * responseData.length);

      const chosenRestaurant = responseData[randomNum];

      console.log(chosenRestaurant);
      // setRestaurant(chosenRestaurant)
      setRestaurant(false)
    });
  }, []);

  if(restaurant !== null) {
    setTimeout(function() {navigation.navigate("Roulette", {restaurant: restaurant})}, 1500);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://c6.staticflickr.com/6/5662/30514668293_d33f88e921_b.jpg"
        }}
        style={{ width: "100%", height: "100%"}}
      />
      <View style={{position:"absolute", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0, 0.4)", color:"white", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <Text style={{position:'relative', top:"7.5%", fontSize:34, color:"white", textAlign:"left", fontWeight:"600", flex:1}}>
          Hang tight.{"\n"}
          We're placing your bet!
        </Text>
        <View style={{flex:4, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/new1.gif')}
                style={{position:"relative",  height:"50%", aspectRatio:1}}/>
        </View>
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
})

function formQuery(
  cuisine,
  price,
  distance,
  term = "food",
  limit = 5,
  latitude = 42.05784,
  longitude = -87.67614,
  open_now = true
) {
  let queryString = "https://api.yelp.com/v3/businesses/search?";

  queryString += ("term=" + term);
  queryString += ("&latitude=" + latitude);
  queryString += ("&longitude=" + longitude);
  queryString += ("&radius=" + distance);
  queryString += ("&limit=" + limit);                         // LIMIT OF NUMBER OF RESTAURANTS
  queryString += ("&categories=" + cuisine.toLowerCase());
  queryString += ("&price=" + price.length);
  queryString += ("&open_now=" + open_now); 

  return queryString;
}