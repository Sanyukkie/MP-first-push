import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const [text, setText] = useState('');

  const Tab = createBottomNavigator();

  const buttonPressed = () => { 
    Alert.alert('You typed: ', text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button onPress={buttonPressed} title="Press me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
