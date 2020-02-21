import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Picker, TouchableOpacity } from "react-native";

export default function Price({ navigation, route }) {
  const [state, setstate] = useState({ ...route.params, price: "$" });
  console.log(state)
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.text}>How spendy are you feeling?</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={{flex:2}}/>
        <Picker
          style={styles.picker}
          itemStyle={{ backgroundColor: "black", color: "white", }}
          selectedValue={state.price}
          onValueChange={(itemValue, itemIndex) =>
            setstate({...state, price: itemValue })
          }
        >
          <Picker.Item label="$" value="$" />
          <Picker.Item label="$$" value="$$" />
          <Picker.Item label="$$$" value="$$$" />
          <Picker.Item label="$$$$" value="$$$$" />
        </Picker>
        <Text style={{flex:2}}/>
      </View>
      <View style={{flex:1, top:"3.75%", width:"80%"}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Spinner", {...state})}
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
