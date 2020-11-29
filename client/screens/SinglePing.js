import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useQuery } from "@apollo/client";

import Ping from "../components/Ping";
import PingIcons from "../components/PingIcons";
import { FETCH_PING_QUERY } from "../utils/graphql";

export default function SinglePing({ route: { params } }) {
  const { data } = useQuery(FETCH_PING_QUERY, {
    skip: !params,
    variables: { pingId: params },
  });

  const renderComments = ({ item }) => {
    return <Ping item={item} background={{ backgroundColor: "#fff" }}/>;
  };

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <Ping item={data.getPing} background={{ backgroundColor: "#D5E2F0" }}>
            <PingIcons />
          </Ping>
          <FlatList
            data={data.getPing.comments}
            renderItem={renderComments}
            keyExtractor={(item) => item.id}
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
  }
})