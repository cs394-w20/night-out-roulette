import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";

export default function Cuisine({ navigation }) {
  const [state, setstate] = useState({ language: "english" });
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.text}>Choose your cuisine!</Text>
      </View>
      <View style={styles.picker}>
        <Picker
          style={styles.picker}
          selectedValue={state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setstate({ language: itemValue })
          }
        >
          <Picker.Item label="Chinese" value="chinese" />
          <Picker.Item label="Indian" value="indian" />
          <Picker.Item label="Mexican" value="mexican" />
        </Picker>
      </View>
      <View style={styles.button}>
        <Button title="Next" onPress={() => navigation.navigate("Price")} />
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
