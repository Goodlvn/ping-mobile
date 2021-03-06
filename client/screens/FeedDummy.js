import React from "react";
import { Button, View } from "react-native";

import { globalStyles } from "../styles/global";

export default function FeedDummy({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Button
        title="Ping 1"
        onPress={() => navigation.navigate("Single Ping")}
      />
      <Button
        title="Ping 2"
        onPress={() => navigation.navigate("Single Ping")}
      />
      <Button
        title="Ping 3"
        onPress={() => navigation.navigate("Single Ping")}
      />
    </View>
  );
}
