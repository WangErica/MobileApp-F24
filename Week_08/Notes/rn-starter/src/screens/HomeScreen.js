import React from "react";
import {View, Text, StyleSheet} from "react-native";

const HomeScreen = () => {
  return( 
    <View>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>Hello</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'blue'
  },
});

export default HomeScreen;
