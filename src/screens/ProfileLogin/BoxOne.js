import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Colors from "../../Common/Colors";
import { myStyles } from "../../Common/styles";
const Box = (props) => {
    return (
        <>
            <TouchableOpacity>
                <View style={styles.container}>
                    <View>
                        <LinearGradient start={{ x: 0.0, y: 0 }} end={{ x: 0.0, y: 1.0 }} colors={['#384CFF', '#00A3FF']} style={styles.box}>
                            <Image source={props.source} style={[props.style,{ tintColor: Colors.white }]} resizeMode={'contain'} />
                        </LinearGradient>
                    </View>
                    <View style={[myStyles.coulmn, myStyles.hr_center]}>
                        <Text style={styles.txt}>{props.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    box: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.blue_txt
    },
    txt: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.blue_txt,
        paddingLeft: 10
    }
})
export default Box;