import React, { useState } from "react";
import { Button, Overlay } from "react-native-elements";

export default function NewPing({ isVisible }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
}
