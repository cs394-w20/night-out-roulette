import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Slider } from "react-native";
//import { Slider } from '@react-native-community/slider';

export default function Distance({ navigation, route }) {
  const [state, setstate] = useState({ ...route.params, distance: 5 });
  console.log(state)
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.text}>How far can you go?</Text>
      </View>
      <View style={styles.slider}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={25}
          step={.25}
          minimumTrackTintColor="#999999"
          maximumTrackTintColor="#aaaaaa"
          value={state.distance}
          style={{ height: 50, width: 350 }}
          onValueChange={(sliderValue) =>
            setstate({...state, distance: sliderValue })
          }
        >
        </Slider>
      <View style={styles.labelBar}>
        <View style={styles.leftContainer}>
          <Text style={[styles.text, {textAlign: 'left'}]}>
            1mi
          </Text>
        </View>
        <Text style={[styles.text, {color: 'grey'}]}>
          {state.distance}mi
        </Text>
        <View style={styles.rightContainer}>
          <Text style={[styles.text, {textAlign: 'right'}]}>
            25mi
          </Text>
        </View>
      </View>
      </View>
      <View style={styles.button}>
        <Button title="Next" onPress={() => navigation.navigate("Price", {...state})} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelBar: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  instructions: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  text: {
    fontWeight: "bold",
    fontSize: 20
  },
  slider: {
    justifyContent: "center"
  },
  button: {
    flex: 1
  }
});
