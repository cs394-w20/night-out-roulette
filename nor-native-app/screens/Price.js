import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";

export default function Price({ navigation, route }) {
  const [state, setstate] = useState({ price: "$", distance: route.params.distance, cuisine: route.params.cuisine });
  console.log(state)
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={{fontFamily:"Helvetica", fontSize:30, color:"black", marginTop:"5%", textAlign:"center", fontWeight:"600"}}>How spendy are you feeling?</Text>
      </View>
      <View style={styles.picker}>
        <Picker
          style={styles.picker}
          selectedValue={state.price}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setstate({...state, price: itemValue })
          }
        >
          <Picker.Item label="$" value="$" />
          <Picker.Item label="$$" value="$$" />
          <Picker.Item label="$$$" value="$$$" />
          <Picker.Item label="$$$$" value="$$$$" />
        </Picker>
      </View>
      <View style={styles.button}>
        <Button title="Next" onPress={() => navigation.navigate("Spinner")} />
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
  button: {
    flex: 1
  }
});
