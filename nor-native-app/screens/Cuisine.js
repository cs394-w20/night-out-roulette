import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";

export default function Cuisine({ navigation }) {
  const [state, setstate] = useState({ cuisine: "Any" });
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.text}>Choose your cuisine!</Text>
      </View>
      <View style={styles.picker}>
        <Picker
          style={styles.picker}
          selectedValue={state.cuisine}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setstate({...state, cuisine: itemValue })
          }
        >
          <Picker.Item label="Any" value="Any" />
          <Picker.Item label="American" value="American" />
          <Picker.Item label="Barbecue" value="Barbecue" />
          <Picker.Item label="Chinese" value="Chinese" />
          <Picker.Item label="French" value="French" />
          <Picker.Item label="Hamburger" value="Hamburger" />
          <Picker.Item label="Indian" value="Indian" />
          <Picker.Item label="Italian" value="Italian" />
          <Picker.Item label="Japanese" value="Japanese" />
          <Picker.Item label="Mexican" value="Mexican" />
          <Picker.Item label="Pizza" value="Pizza" />
          <Picker.Item label="Seafood" value="Seafood" />
          <Picker.Item label="Steak" value="Steak" />
          <Picker.Item label="Sushi" value="Sushi" />
          <Picker.Item label="Thai" value="Thai" />
        </Picker>
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
  button: {
    flex: 1
  }
});
