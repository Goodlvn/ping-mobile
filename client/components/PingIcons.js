import React from 'react'
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function PingIcons() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
            {/* Support icon and count */}
            <View style={{ flexDirection: "row" }} >
                <Ionicons
                    style={styles.icon}
                    name="ios-heart"
                    size={15}
                    color="#F0271D"
                />
                <Text style={styles.count}>3</Text>
            </View>
            {/* Comment icon and count */}
            <View style={{ flexDirection: "row" }}  >
                <FontAwesome5
                    style={styles.icon}
                    name="comment"
                    size={15}
                    color="#717378"
                    onPress={() => console.log("test as button")}
                />
                <Text style={styles.count}>3</Text>
            </View>
            {/* Content Type */}
            <View style={{ flexDirection: "row" }} >
                <Entypo
                    style={styles.icon}
                    name="image"
                    size={15}
                    color="#717378"
                    onPress={() => console.log("test as button")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50
    },
    item: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "column",
    },
    username: {
        fontSize: 18,
        fontWeight: "bold"
    },
    time: {
        fontSize: 15,
        color: "#aaa"
    },
    body: {
        marginTop: 10,
        fontSize: 18,
        color: "#555",
    },
    feed: {
        marginTop: 0,
    },
    avatar: {
        margin: 3
    },
    icon: {
        marginLeft: 20,
        marginRight: 2
    },
    count: {
        color: "#717378"
    }

});
