import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";
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
          <View>
            <ScrollView styles={{ margin: 0, padding: 0 }}>
              <Ping item={data.getPing} background={{ backgroundColor: "#D5E2F0" }}>
                <PingIcons item={data.getPing} user={user} route={route} />
              </Ping>
            </ScrollView>
          </View>
          <View style={styles.commentsHeader}>
            <Text style={styles.commentsText}>Comments</Text>
          </View>
          <View >
            <TextInput
              style={{ height: 50, borderColor: "#E0FFEE", borderWidth: 1 }}
              placeholder="Got something to say?"
              placeholderTextColor="#707070"
              textAlign="center"
            />
            <Button title="Send" raised />
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
    backgroundColor: "#E0FFEE",
    marginTop: 0,
  },
  commentsHeader: {
    alignItems: 'center',
    borderBottomColor: "#eee",
    marginBottom: -8

  },
  commentsText: {
    marginVertical: 10,
    fontSize: 12,
    fontWeight: "bold"
  }
});
