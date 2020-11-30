import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useMutation } from '@apollo/client';

import Actions from '../utils/dashboardActions';
import { useAuthContext } from '../utils/useAuthContext';
import { useDashboardContext } from '../utils/useDashboardContext';
import { DELETE_USER } from '../utils/graphql';
import { useForm } from '../utils/useForm';

export default function DeleteUser() {
  const authContext = useAuthContext();
  const [_, dispatch] = useDashboardContext();
  const initialState = {password: ""}
  const { handleChange, handleSubmit, values } = useForm(deleteUserCb, initialState);

  const [deleteUser] = useMutation(DELETE_USER, {
    onError(err) {
      console.log(err);
    },
    variables: {
      password: values.password
    },
    onCompleted() {
      dispatch({ type: Actions.CLEAR_USER });
      authContext.logout();
    }
  })

  function deleteUserCb() {
    deleteUser();
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Password</Text>
      <Input
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(val) => handleChange("password", val)}
      />
      <Button title="Delete Account" raised onPress={handleSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  title: {
    fontWeight: "bold",
    fontSize: 15
  }
})
