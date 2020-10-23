import React from 'react'
import { Text, StyleSheet, View, Button} from "react-native"
import ColorCounter from '../components/ColorCounter'

function SquareScreen() {
  return (
    <View>
      <Text>Square demo</Text>
      <ColorCounter />
      <ColorCounter />
      <ColorCounter />
    </View>
  )
}

const styles= StyleSheet.create({})

export default SquareScreen
