import React from 'react'
import MapView from "react-native-maps";
import { View, Alert } from 'react-native';

export default function MapPins({ latt, long, username, body, id, navigation }) {
    return (
        <MapView.Marker
            coordinate={{
                latitude: latt,
                longitude: long,
            }}
            title={username}
            description={body}
            onPress={() => navigation.navigate("Single Ping", id)}
        />
    )
}
