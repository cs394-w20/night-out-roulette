import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, Linking, Platform } from "react-native";
import { REACT_APP_API_KEY } from "react-native-dotenv";

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
      <Text>{restaurant['name']}</Text>
      <Image
        source={{
          uri:
            restaurant['image_url']
        }}
        style={{ width: 400, height: 400 }}
      />
      <Button title="Take me there!" onPress={() => {var address = restaurant['location']['display_address'][0].replace(' ', '+') + restaurant['location']['display_address'][1].replace(' ', '+'); 
                                                      Linking.openURL(Platform.select({ ios: 'maps:0,0?q='+address, android: 'geo:0,0?q='+address }))}}>
      </Button>
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
