import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { REACT_APP_API_KEY } from "react-native-dotenv";

async function makeLocationPromise() {
  return new Promise((resolve,reject)=> {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("hello world");
        console.log(position);
        resolve(position);
      },
      error => {
        console.log("hello world");
        console.log(error.message);
        Actions.error({ message: 'gps_error' });
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 1000
      }
    );
  });

};
export default function Spinner({ navigation, route }) {

  const [restaurant, setRestaurant] = useState(null);

  useEffect(async () => {
    var cuisine = route.params.cuisine;
    var price = route.params.price;
    var distance = route.params.distance;
    var latitude;
    var longitude;
    let result = await makeLocationPromise().then(
      position=>{
      console.log("positionLocated");
      console.log(position);
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      });
/*    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      },
      (error) => {
        Actions.error({ message: 'gps_error' });
      },
      {
        enableHighAccuracy: true,
        timeout: 100000,
        maximumAge: 1000
      })*/
    //spinlock b/c fuck
    var x = 0;
    console.log("updatedVersion");
    /*while(latitude === undefined || longitude === undefined) {
      setTimeout(function(){
        console.log("spinning more");
      }, 2000);//a
    }*/

    alert(latitude);
    alert(longitude);
    console.log("spun");
    let queryString = formQuery(cuisine, price, distance * 1600, latitude, longitude);
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
      setRestaurant(chosenRestaurant)
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
      <View style={{position:"absolute", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0, 0.6)", color:"white", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
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
 //latitude = 42.05784,
 //longitude = -87.67614,
function formQuery(//these are ARGUMENTS!
  cuisine,
  price,
  distance,  
  latitude,
  longitude,
  term = "food",
  limit = 5,
  open_now = true
) {
  console.log("lat/long in formQuery");
  console.log(latitude);
  console.log(longitude);
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