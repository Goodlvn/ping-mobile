import React, { useEffect, useState } from 'react'
import { View, Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Appbar } from 'react-native-paper';

import { useQuery } from "@apollo/client"
import { FETCH_PINGS_QUERY } from '../utils/graphql';

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.body}</Text>
    </TouchableOpacity >
);


export default function Feed() {
    const { data } = useQuery(FETCH_PINGS_QUERY);
    const [selectedId, setSelectedId] = useState(null);

    if (data) { console.log(data) };

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    console.log("Houston, the eagle has landed 🚀");
    return (
        <View style={styles.container}>
            <Appbar style={styles.header}>
                <Image style={styles.logo} source={require("../assets/nodes.png")} />
                <Text>RAW FEED</Text>
            </Appbar>

            {data ? <FlatList
                style={styles.feed}
                data={data.getPings}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            /> : <Text>TEST THE LIST</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0
    },
    header: {
        backgroundColor: "#999895",
        height: 150,
        width: "100%",
        position: "relative",
        top: 0,
        justifyContent: 'center',
        zIndex: 500
    },
    logo: {
        width: 50,
        height: 50
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    feed: {
        marginTop: 150,
    }
});


