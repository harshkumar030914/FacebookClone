import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Colors from "../../../Common/Colors";
const SearchBar = () => {
    return (
        <>
            <View style={styles.header}>
                <View style={{ justifyContent: "center", alignItems: "center", marginRight: 5 }}>
                    <Image source={require('../../../assets/images/story.jpeg')} style={styles.profile} resizeMode="contain" />
                </View>
                <View style={[styles.body, { justifyContent: "center", alignItems: "center", marginHorizontal: 10 }]}>
                    <TouchableOpacity style={{ height: 39, width: "100%", marginVertical: 5, borderRadius: 10, backgroundColor: "rgba(238, 238, 238, 0.5)" }}>
                        <View style={[styles.body, { flexDirection: "row" }]}>
                            <View style={{ flex: 1, justifyContent: "center", }}>
                                <Text style={{ fontSize: 12, paddingHorizontal: 5, color: '#999999', fontWeight: "400" }}>{"What's on your mind Eren ?"}</Text>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center", marginRight: 15 }}>
                                <Image source={require('../../../assets/images/image.png')} resizeMode="contain" style={{ height: 15, width: 15 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 10, marginVertical: 5, marginHorizontal: 5, backgroundColor: "rgba(238, 238, 238, 0.5)" }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Image source={require('../../../assets/images/Icon.png')} resizeMode="contain" style={{ height: 20, width: 20, tintColor: Colors.black }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginHorizontal: 8,
        marginVertical: 10
    },
    body: {
        flex: 1,
    },
    profile: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    box: {
        height: 60,
    }

})
export default SearchBar