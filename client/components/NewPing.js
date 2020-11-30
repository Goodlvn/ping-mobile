import React from "react";
import { View, Text } from 'react-native';
import { Overlay } from "react-native-elements";

export default function NewPing({ isVisible, setIsVisible }) {

  return (
    <View>
      <Overlay isVisible={isVisible} onBackdropPress={() => setIsVisible(!isVisible)}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
}
