import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";

export default function Cuisine({ navigation }) {
  const [state, setstate] = useState({ cuisine: "newamerican" });
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.text}>What are you hungry for?</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={{flex:2}}/>
        <Picker
          style={styles.picker}
          itemStyle={{ backgroundColor: "black", color: "white", }}
          selectedValue={state.cuisine}
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
        <Text style={{flex:2}}/>
      </View>
      {/* <View style={styles.button}>
        <Button
          title="Next"
          onPress={() => navigation.navigate("Distance", { ...state })}
        />
      </View> */}
      <View style={{flex:1, top:"3.75%", width:"80%"}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Distance", { ...state })}
          style={styles.button}>
            
            <Text style={{position:"relative", color:"rgba(220,220,220, 1)", textAlign:"center", fontSize:24, fontWeight:"900"}}>
              Next
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    flexDirection: "column",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  instructions: {
    flex:1,
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
  pickerContainer: {
    width: "100%",
    flex: 3,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
  },
  picker: {
    position:"relative",
    width:"33%",
    flex:1,
    backgroundColor: "#21497D",
    color:"white",
  },
  button: {
    backgroundColor: 'rgba(33, 73, 125, 0.5)',
    padding:10,
    borderRadius: 50
  },
});
