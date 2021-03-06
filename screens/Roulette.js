import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Linking, Platform, TouchableOpacity, BackHandler, Share } from "react-native";
import StarRating from 'react-native-star-rating';
import shareicon from '../assets/shareicon.png';
import spinnyGIF from '../assets/new1.gif'

import AppLink from 'react-native-app-link';


async function onShare(restaurant) {
  try {
    const result = await Share.share({
      message:
        restaurant['url'],
    });
  } catch (error) {
    alert(error.message);
  }
}

export default function Roulette({ navigation, route }) {
  const [restaurant, setRestaurant] = useState(route.params.restaurant)
  const [restaurantTwo, setRestaurantTwo] = useState(route.params.restaurantTwo)
  const [restaurantThree, setRestaurantThree] = useState(route.params.restaurantThree)
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
              style={{...styles.button, alignItems:"center", justifyContent:"center"}}>
                <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", fontWeight:"600",}}>
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
            "https://c6.staticflickr.com/6/5662/30514668293_d33f88e921_b.jpg"
        }}
        style={{ width: "100%", height: "100%"}}
      />
      <View style={{position:"absolute", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0, 0.4)", color:"white", flexDirection:"column", alignItems:"center"}}>
        <View style={{flexDirection:"row", flex:1, top:"15%"}}>
          <Text style={{position:'relative', flex:1, fontSize:30, color:"white", textAlign:"left", fontWeight:"600", paddingLeft:"3%"}}>
            We Picked a Winner!
          </Text>

          <TouchableOpacity
            onPress={() => onShare(restaurant)}
            style={{textAlign:"right", paddingRight:"3%"}}>
            <Image source={shareicon}/>
          </TouchableOpacity>
        </View>

        {/* Name and Address */}
        <View style={{flex:2, flexBasis:"auto", alignItems:"center"}}>
          <Text style={{textTransform:"uppercase", fontWeight:"bold", fontSize:35, color:"white", textAlign:"center"}}>{restaurant['name']}</Text>
          <Text style={{fontSize:25, color:"white", textAlign:"center"}}>{restaurant['location']['display_address'][0]+"\n"+restaurant['location']['display_address'][1]+'\n'}</Text>
          <Text style={{fontSize:22, lineHeight:40, color:"white"}}>{(restaurant['distance']/1609.344).toFixed(1)} miles away </Text>
          <StarRating
            disabled={true}
            fullStarColor="gold"
            starSize={40}
            maxStars={5}
            starStyle={{paddingHorizontal:"1%"}}
            rating={restaurant['rating']}
          />
        </View>

        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems:'center', width: "100%", top:"15%"}}>
          <TouchableOpacity
            onPress={() => openRestaurant(restaurant['location']['display_address'])}
            style={{backgroundColor:"#01ABE7", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"5%", paddingRight:"5%", borderRadius:50}}>
              <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", padding:"2%", fontWeight:"900"}}>
              Drive
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => AppLink.maybeOpenURL('uber://?client_id=jHQd0Xx0KGQ-jF3iCG8h9ap-Xlt8-8AP&action=setPickup&pickup=my_location&dropoff[formatted_address]='+(restaurant['location']['display_address'][0]).replace(/ /g, '%20'),
                                                { appName:"Uber", appStoreId:"368677368", appStoreLocale:"us", playStoreId:"com.ubercab" })}
            // style={styles.button}
            style={{backgroundColor:"black", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"5%", paddingRight:"5%", borderRadius:50}}>
              <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", padding:"2%", fontWeight:"900"}}>
                Uber
              </Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => AppLink.maybeOpenURL('lyft://ridetype?id=lyft&destination[latitude]='+restaurant['coordinates']['latitude'].toString()+'&destination[longitude]='+restaurant['coordinates']['longitude'].toString(),
                                                { appName:"Lyft", appStoreId:"529379082", appStoreLocale:"us", playStoreId:"me.lyft.android" })}
            // style={styles.button}
            style={{backgroundColor:"#FF00BF", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"5%", paddingRight:"5%", borderRadius:50}}>
              <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", padding:"2%", fontWeight:"900"}}>
                Lyft
              </Text>
          </TouchableOpacity>
        </View>



        {rerolls < 2 ? 
        <View style={{flex: 1.3, top:"15%", flexDirection: 'row', left:"3%"}}>

          
          <TouchableOpacity
            onPress={() => navigation.navigate("Spinner", {rerolls: rerolls + 1, restaurantTwo: restaurantTwo, restaurantThree: restaurantThree})}
            style={styles.button2}>
              <Image style={{width:"18%", height:"45%", top:"10%", right:"5%", aspectRatio: 1}} source={spinnyGIF}/>
              <Text style={{position:"relative", fontSize:24, color:"rgba(220,220,220, 1)", textAlign:"center", paddingTop:"12%", fontWeight:"600"}}>
                Reroll?
              </Text>
          </TouchableOpacity>
        </View>

        : 
        
        <View style={{flex: 1.25, top:"15%", width:"70%", flexDirection:'row'}}>
        </View>
        }
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
    flex:1,
    marginHorizontal:'5%',
    height: '40%',
    backgroundColor: 'rgba(33, 125, 73, 1.0)',
    padding:10,
    borderRadius: 50
  },
  button2: {
    flex:1,
    marginHorizontal:'20%',
    height: '40%',
    marginLeft: '30%',
    borderRadius: 50,
    flexDirection:"row"
  },
});

function openRestaurant(display_address) {
  var address = '';
  address += display_address[0];
  Linking.openURL(Platform.select({ ios: 'maps:0,0?q='+address, android: 'geo:0,0?q='+address}));
}
