import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const reducer = (state, action) => {
  switch(action.type){
    case 'increase':
      return {...state, count: state.count + 1 };
    case 'decrease':
      return {...state, count: state.count - 1 };
    default: 
    return state;
  }
}

function CounterScreen() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <View>
      <Text>Current Count: {state.count}</Text>
      <Button title='Increase' onPress={() => dispatch({type:'increase'})}/>
      <Button title='Decrease' onPress={() => dispatch({type:'decrease'})}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
