import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function SettingsOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Update Profile"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Delete Account"
          onPress={() => navigation.navigate("Delete")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
