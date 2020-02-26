import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { REACT_APP_API_KEY } from "react-native-dotenv";

export default function Spinner({ navigation, route }) {

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    var { cuisine, price, distance, time } = route.params;
    let queryString = formQuery(cuisine, price, distance * 1600, time);
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

        if (!responseData || responseData.length === 0) {
          setRestaurant(false);
        }

        const randomNum = Math.floor(Math.random() * responseData.length);

        const chosenRestaurant = responseData[randomNum];

        console.log(chosenRestaurant);
        setRestaurant(chosenRestaurant)
      });
  }, []);

  if (restaurant !== null) {
    setTimeout(function () { navigation.navigate("Roulette", { restaurant: restaurant }) }, 1500);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://c6.staticflickr.com/6/5662/30514668293_d33f88e921_b.jpg"
        }}
        style={{ width: "100%", height: "100%" }}
      />
      <View style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0, 0.6)", color: "white", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ position: 'relative', top: "7.5%", fontSize: 34, color: "white", textAlign: "left", fontWeight: "600", flex: 1 }}>
          Hang tight.{"\n"}
          We're placing your bet!
        </Text>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/new1.gif')}
            style={{ position: "relative", height: "50%", aspectRatio: 1 }} />
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
  time,
  term = "food",
  limit = 5,
  latitude = 42.05784,
  longitude = -87.67614,
) {
  let queryString = "https://api.yelp.com/v3/businesses/search?";

  queryString += ("term=" + term);
  queryString += ("&latitude=" + latitude);
  queryString += ("&longitude=" + longitude);
  queryString += ("&radius=" + distance);
  queryString += ("&limit=" + limit);                         // LIMIT OF NUMBER OF RESTAURANTS
  queryString += ("&categories=" + cuisine.toLowerCase());
  queryString += ("&price=" + price.length);

  var currTime = new Date();

  switch(time) {
    case 'Breakfast':
      var possible = currTime.getHours() <= 10
      if(possible) {
        currTime.setHours(8)
      } else {
        currTime.setDate(currTime.getDate()+1)
        currTime.setHours(8)
      }
      queryString += ("&open_at=" + Math.floor(currTime.getTime()/1000));
      break
    case 'Lunch':
      var possible = currTime.getHours() <= 14
      if(possible) {
        currTime.setHours(12)
        
      } else {
        currTime.setDate(currTime.getDate()+1)
        currTime.setHours(12)
      }
      queryString += ("&open_at=" + Math.floor(currTime.getTime()/1000));
      break
    case 'Dinner':
      var possible = currTime.getHours() <= 20
      if(possible) {
        currTime.setHours(18)
      } else {
        currTime.setDate(currTime.getDate()+1)
        currTime.setHours(18)
      }
      queryString += ("&open_at=" + Math.floor(currTime.getTime()/1000));
      break
    default:
      queryString += ("&open_now=" + true);
      break
  }

  return queryString;
}