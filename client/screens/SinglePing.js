import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useQuery } from '@apollo/client';

import Ping from '../components/Ping';
import PingIcons from '../components/PingIcons';
import { FETCH_PING_QUERY } from '../utils/graphql';

export default function SinglePing({ route: { params } }) {
  const { data } = useQuery(FETCH_PING_QUERY, { skip: !params, variables: {pingId: params}})

  if(data){
    console.log(data);
  }

  return (
    <>
      {data ? (
        <Ping item={data.getPing} />
      ) : (
        <Text> Loading</Text>
      )}
    </>
  );
}
