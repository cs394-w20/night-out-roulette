import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Picker, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Price({ navigation, route }) {
  const [state, setstate] = useState({ ...route.params, price: "$" });
  
  function Item({ title, selected, onSelect }) {
    return (
      <TouchableOpacity onPress={() => onSelect(title)} style={[styles.item, {backgroundColor: selected? 'rgba(33, 73, 125, 1.0)' : 'rgba(33, 73, 125, 0.7)'}]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
  
  const onSelect = React.useCallback(
    id => {
      setstate({...state, price: id});
    },
    [state],
  );

  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Text style={styles.text}>How spendy are you feeling?</Text>
      </View>
      <View style={styles.pickerContainer}>
        <FlatList style={{ flex: 1, marginVertical: "2.5%", width: "100%" }}
                  contentContainerStyle={{width:"100%", alignItems:"center"}} 
                  data={['$', '$$', '$$$', '$$$$']}
                  renderItem={({ item }) => <Item title={item} selected={state.price == item} onSelect={onSelect} />}
                  keyExtractor={item => item}/>
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
    color:"white",
  },
  button: {
    backgroundColor: 'rgba(33, 73, 125, 0.6)',
    padding:10,
    borderRadius: 50
  },

  item: {
    minWidth: "75%",
    backgroundColor: 'rgba(33, 73, 125, 0.7)',
    borderRadius: 25,
    paddingVertical: 10,
    marginVertical: 8,
  },
  title: {
    color: 'white',
    textAlign: "center",
    fontSize: 26,
  },
});
