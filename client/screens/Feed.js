import React, { useEffect, useState } from 'react'
import { View, Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { Appbar } from 'react-native-paper';


import { useQuery } from "@apollo/client"
import { FETCH_PINGS_QUERY } from '../utils/graphql';

const Item = ({ item, onPress, style }) => (

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
        <Text style={styles.body}>{item.body}</Text>
    </TouchableOpacity >
);


export default function Feed() {
    const { data } = useQuery(FETCH_PINGS_QUERY);
    const [selectedId, setSelectedId] = useState(null);

    if (data) { console.log(data) };

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#BCE9D1" : "#D5E2F0";

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
        backgroundColor: "#D5E2F0",
        height: 150,
        width: "100%",
        position: "fixed",
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
        flexDirection: "row"
    },
    username: {
        fontSize: 23,
    },
    body: {
        marginTop: 15,
    },
    feed: {
        marginTop: 150,
    },

});

{/* <FlatList
    data={this.props.tweets}
    keyExtractor={this._keyExtractor}
    renderItem={({ item }) => (
        <View style={styles.tweet}>
            <TouchableHighlight
                onPress={this._profileClick.bind(this, item.user)}
                underlayColor="white"
                activeOpacity={0.75}
            >
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <Thumbnail source={{ uri: item.user.avatar }} />
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }}
                    >
                        <Text
                            style={{
                                paddingLeft: 15,
                                fontWeight: "bold",
                                fontSize: 20
                            }}
                        >
                            {item.user.name}
                        </Text>

                        <Text
                            style={{
                                paddingLeft: 15,
                                color: "#aaa",
                                fontSize: 16
                            }}
                        >
                            {"@" + item.user.username}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
            <Text style={styles.tweetText}>{item.tweetContent}</Text>
            <View style={styles.tweetFooter}>
                <View style={styles.footerIcons}>
                    <Button
                        transparent
                        dark
                        onPress={this._tweetDetails.bind(this, item)}
                    >
                        <Icon name="ios-text-outline" />
                        <Text style={styles.badgeCount}>{item.replies}</Text>
                    </Button>
                </View>
                <View style={styles.footerIcons}>
                    <Button transparent dark>
                        <Icon name="ios-repeat" />
                        <Text style={styles.badgeCount}>{item.retweets}</Text>
                    </Button>
                </View>
                <View style={styles.footerIcons}>
                    <Button transparent dark>
                        <Icon name="ios-heart-outline" />
                        <Text style={styles.badgeCount}>{item.likes}</Text>
                    </Button>
                </View>
                <View style={styles.footerIcons}>
                    <Button transparent dark>
                        <Icon name="ios-mail-outline" />
                    </Button>
                </View>
            </View>
        </View>
    )}
/>


    <FlatList
        data={}
        keyExtractor={}
        renderItem={({ item }) => (
            <TouchableHighlight>
                <View>
                    <Thumbnail />
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </View>
            </TouchableHighlight>


            <Text></Text>


            <View>
                <View>
                    <Button>
                        <Icon />
                        <Text></Text>
                    </Button>
                </View>
                <View>
                    <Button>
                        <Icon />
                        <Text></Text>
                    </Button>
                </View>
                <View>
                    <Button>
                        <Icon />
                        <Text></Text>
                    </Button>
                </View>
                <View>
                    <Button>
                        <Icon />
                    </Button>
                </View>
            </View>
        )

/> */}