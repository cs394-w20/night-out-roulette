import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";
import Slider from '@react-native-community/slider';

export default function Price({ navigation, route }) {
  const [state, setstate] = useState({ distance: 5, cuisine: route.params.cuisine });
  console.log(state)
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.text}>What's your budget?</Text>
      </View>
      <View style={styles.slider}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={25}
          step={.25}
          minimumTrackTintColor="#dddddd"
          maximumTrackTintColor="#dddddd"
          value={state.distance}
          style={{ height: 50, width: 100 }}
          onValueChange={(sliderValue) =>
            setstate({...state, distance: sliderValue })
          }
        >
        </Slider>
      </View>
      <View style={styles.button}>
        <Button title="Next" onPress={() => navigation.navigate("Price", {...state})} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  picker: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  slider: {
    flex: 3,
    justifyContent: "center"
  },
  button: {
    flex: 1
  }
});
