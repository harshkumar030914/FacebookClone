import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Colors from "../../../Common/Colors";
import { Post_profile } from "../../../Common/constant";
import { myStyles } from "../../../Common/styles";
import more from "../../../assets/images/more.png"
const NotificationBox = () => {
    return (
        <>
            <LinearGradient start={{ x: 0.0, y: 1 }} colors={['rgba(56, 76, 255, 0.2)', 'rgba(0, 163, 255, 0.2)']} style={styles.container}>
                <View style={myStyles.row}>
                    <View style={myStyles.center}>
                        <Image source={{ uri: Post_profile }} style={myStyles.post_user} />
                    </View>
                    <View style={[myStyles.coulmn, { justifyContent: "center", paddingHorizontal: 10 }]}>
                        <Text style={styles.message}>{'Darrell Trivedi has a new story  up.\nWhat’s your reaction?'}</Text>
                        <Text style={styles.ago}>{'2h.ago'}</Text>
                    </View>
                    <View style={myStyles.center}>
                        <Image source={more} style={styles.setting} />
                    </View>
                </View>
            </LinearGradient>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 70,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.border
    },
    message: {
        fontSize: 13,
        fontWeight: "600",
        color: Colors.black
    },
    ago: {
        fontSize: 12,
        fontWeight: "400",
        color: Colors.secondary_txt
    },
    setting: {
        resizeMode: "contain",
        transform: [{ rotate: "90deg" }]
    }
})
export default NotificationBox;