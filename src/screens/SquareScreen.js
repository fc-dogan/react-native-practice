import React, {useState} from 'react'
import { Text, StyleSheet, View, Button} from "react-native"
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREAMENT = 15;

function SquareScreen() {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  return (
    <View>
      <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} ></View>
      <Text>Square demo</Text>
      <ColorCounter 
        onIncrease={() => setRed(red + COLOR_INCREAMENT)} 
        onDecrease={() => setRed(red - COLOR_INCREAMENT)} 
        color='Red'/>
      <ColorCounter  
        onIncrease={() => setGreen(green + COLOR_INCREAMENT)} 
        onDecrease={() => setGreen(green - COLOR_INCREAMENT)} 
        color='Green'/>
      <ColorCounter  
        onIncrease={() => setBlue(blue + COLOR_INCREAMENT)} 
        onDecrease={() => setBlue(blue - COLOR_INCREAMENT)} 
        color='Blue'/>
    </View>
  )
}

const styles= StyleSheet.create({})

export default SquareScreen
