import React from "react";
import { View, StyleSheet } from 'react-native';
import { Input, Button } from "react-native-elements";
import { useMutation } from "@apollo/client";
import { CREATE_PING } from "../utils/graphql";
import { useForm } from "../utils/useForm";
import { useDashboardContext } from "../utils/useDashboardContext";


export default function NewPing({ navigation }) {
  const [{ userPosition }] = useDashboardContext();
  const initialState = { body: "", imageUrl: "" };
  const { handleChange, handleSubmit, values, setValues } = useForm(createPingCb, initialState);

  const [createPing] = useMutation(CREATE_PING, {
    onError(err) {
      console.log(err);
    },
    onCompleted() {
      setValues(initialState);
      navigation.navigate('Feeds');
    },
  });

  function createPingCb(img) {
    createPing({
      variables: {
        ...values,
        imageUrl: img,
        lat: userPosition.latitude,
        long: userPosition.longitude,
      },
    });
  }

  return (
    <View style={styles.text}>
      <Input
        value={values.body}
        onChangeText={(val) => handleChange("body", val)}
        placeholder="What's poppin..."
      />
      <Button style={styles.postBtn} title="Post" raised onPress={handleSubmit} />
    </View>
  );
}



const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
})