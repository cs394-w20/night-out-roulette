import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";

export default function Cuisine({ navigation }) {
  const [state, setstate] = useState({ cuisine: "American" });
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={{fontSize: 30, color:"black", marginTop:"5%", textAlign:"center", fontWeight:"600"}}>What are you in the mood for?</Text>
      </View>
      <View style={styles.picker}>
        <Picker
          style={styles.picker}
          selectedValue={state.cuisine}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setstate({ ...state, cuisine: itemValue })
          }
        >
          <Picker.Item label="American" value="newamerican" />
          <Picker.Item label="Barbecue" value="bbq" />
          <Picker.Item label="Chinese" value="Chinese" />
          <Picker.Item label="French" value="French" />
          <Picker.Item label="Hamburger" value="burgers" />
          <Picker.Item label="Indian" value="indpak" />
          <Picker.Item label="Italian" value="Italian" />
          <Picker.Item label="Japanese" value="Japanese" />
          <Picker.Item label="Mexican" value="Mexican" />
          <Picker.Item label="Pizza" value="pizza" />
          <Picker.Item label="Seafood" value="seafood" />
          <Picker.Item label="Steak" value="steak" />
          <Picker.Item label="Sushi" value="sushi" />
          <Picker.Item label="Thai" value="thai" />
        </Picker>
      </View>
      <View style={styles.button}>
        <Button
          title="Next"
          onPress={() => navigation.navigate("Price", { ...state })}
        />
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
