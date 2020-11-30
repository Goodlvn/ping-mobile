import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";

import Ping from "../components/Ping";
import PingIcons from "../components/PingIcons";
import { FETCH_PING_QUERY } from "../utils/graphql";
import { useAuthContext } from "../utils/useAuthContext";

export default function SinglePing({ route, route: { params } }) {
  const { user } = useAuthContext();
  const { data } = useQuery(FETCH_PING_QUERY, {
    skip: !params,
    variables: { pingId: params },
  });

  const renderComments = ({ item }) => {
    return <Ping item={item} background={{ backgroundColor: "#fff" }} />;
  };

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <ScrollView>
            <Ping item={data.getPing} background={{ backgroundColor: "#D5E2F0" }}>
              <PingIcons item={data.getPing} user={user} route={route} />
            </Ping>
          </ScrollView>
          <View style={styles.commentsHeader}>
            <Text style={styles.commentsText}>Comments</Text>
          </View>
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
  },
  commentsHeader: {
    textAlign: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  commentsText: {
    marginVertical: 10,
    fontSize: 12,
    fontWeight: "bold"
  }
});
