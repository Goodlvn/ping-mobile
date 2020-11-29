import React from 'react'
import { View, Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

export default function Ping({ onPress, style, item }) {


    return (
        <View>
            <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
                <Avatar
                    onPress={() => console.log("I am an avatart")}
                    size="medium"
                    rounded
                    source={{
                        uri:
                            'https://picsum.photos/200',
                    }}
                />
                <Text style={styles.username}>@username</Text>

            </TouchableOpacity >

            <Text style={styles.body}>{item.body}</Text>

            <View>
                {/* This is where the support count would go */}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "column"
    },
    logo: {
        width: 50,
        height: 50
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row"
    },
    username: {
        fontSize: 23,
    },
    body: {
        marginTop: 15,
    },
    feed: {
        marginTop: 0,
    },

});
