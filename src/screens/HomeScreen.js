import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button} from "react-native"

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);

  return(
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={ () => navigation.navigate('Components') }
        title='Go to components demo'/>
      <Button 
        onPress={ () => navigation.navigate('List') } 
        title='Go to list demo'
      />
      <Button 
        onPress={ () => navigation.navigate('Image') } 
        title='Go to image demo'
      />
      <Button 
        onPress={ () => navigation.navigate('Counter') } 
        title='Go to counter demo'
      />
      <Button 
        onPress={ () => navigation.navigate('Color') } 
        title='Go to Color demo'
      />
      <Button 
        onPress={ () => navigation.navigate('Square') } 
        title='Go to Square demo'
      />
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
