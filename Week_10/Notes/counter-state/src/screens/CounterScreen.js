import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, actions) => {

  switch(action.type){
    case 'increment':
      return {...state, count:state.count + action.payload}
    case 'decrement':
      return {...state, count:state.count - action.payload}
      default:
        return state
  }

}

const CounterScreen = () => {
  const[state, dispatch] = useReducer(reducer, {count:1})

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({type: 'increment', payload: 1}) 

        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type: 'decrement', payload: 1}) 

        }}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
