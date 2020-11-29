import React from "react";
import { View, Text } from "react-native";
import { useQuery } from '@apollo/client';

import { FETCH_PING_QUERY } from '../utils/graphql';

export default function SinglePing({ route: { params } }) {
  const { data } = useQuery(FETCH_PING_QUERY, { skip: !params, variables: {pingId: params}})

  if(data){
    console.log(data);
  }

  return (
    <View>
      <Text>Single Ping</Text>
    </View>
  );
}
