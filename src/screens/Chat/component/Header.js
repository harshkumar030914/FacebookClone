import React from "react";
import { StyleSheet, View, Image, Text, TouchableHighlight } from "react-native";
import Colors from "../../../Common/Colors";
import { Post_profile, user_name } from "../../../Common/constant";
import { myStyles } from "../../../Common/styles";
import Home from "../../../assets/images/Home.png"
export default function Header() {
    return (
        <>
            <View style={styles.container}>
                <View style={myStyles.row}>
                    <View style={styles.row}>
                        <Image source={{ uri: Post_profile }} style={styles.img} />
                        <Text style={styles.header_txt}>{'Chats'}</Text>
                    </View>
                    <View style={myStyles.row2}>
                        <TouchableHighlight style={myStyles.center}>
                            <Image source={Home} resizeMode={'contain'} style={{ height: 25, width: 25 }} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        marginVertical: 10
    },
    img: {
        height: 45,
        width: 45,
        borderRadius: 10
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    header_txt: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.black,
        marginHorizontal: 10
    }
})