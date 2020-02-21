import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Slider, Image } from "react-native";

export default function Distance({ navigation, route }) {
  const [state, setstate] = useState({ ...route.params, distance: 5 });
  console.log(state)
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
        <View style={styles.instructions}>
          <Text style={styles.text}>How far can you go?</Text>
        </View>
        <View style={styles.slider}>
          <Slider
            minimumValue={1}
            maximumValue={25}
            step={.25}
            minimumTrackTintColor="#ffffff"
            maximumTrackTintColor="#aaaaaa"
            value={5}
            style={{ height: 50, width: 350 }}
            onValueChange={(sliderValue) =>
              setstate({...state, distance: sliderValue })
            }
          >
          </Slider>
          <View style={styles.labelBar}>
            {/* <View style={styles.leftContainer}>
              <Text style={[styles.text, {textAlign: 'left'}]}>
                1mi
              </Text>
            </View> */}
            <Text style={[styles.text, {color: 'lightgrey'}]}>
              {state.distance}mi
            </Text>
            {/* <View style={styles.rightContainer}>
              <Text style={[styles.text, {textAlign: 'right'}]}>
                25mi
              </Text>
            </View> */}
          </View>
        </View>
        <View style={{flex:1, top:"3.75%", width:"80%"}}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Price", {...state})}
            style={styles.button}>
              
              <Text style={{position:"relative", color:"rgba(220,220,220, 1)", textAlign:"center", fontSize:24, fontWeight:"900"}}>
                Next
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelBar: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent:'center'
  },
  // leftContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   left: "1%"
  // },
  // rightContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   right:"1%"
  // },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  instructions: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  text: {
    fontSize:40, 
    color:"white", 
    marginTop:"5%", 
    textAlign:"center", 
    fontWeight:"900"
  },
  slider: {
    flex: 3,
    justifyContent: "center"
  },
  button: {
    backgroundColor: 'rgba(33, 73, 125, 0.6)',
    padding:10,
    borderRadius: 50
  },
});
