import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { myStyles } from "../../../Common/styles";
import Colors from "../../../Common/Colors";
const UserInfo = (props) => {
    return (
        <>
            <View style={[myStyles.row2, myStyles.center, myStyles.margin_10, { marginTop: 5 }]}>
                <View>
                    <Image source={props.source} resizeMode={'contain'} style={{ height: 25, width: 25 }} />
                </View>
                <View style={myStyles.coulmn}>
                    <Text style={style.para}>{props.text}</Text>
                </View>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    para: {
        fontSize: 15,
        marginVertical: 5,
        fontWeight: "600",
        color: Colors.black,
        paddingHorizontal: 5
    }
})
export default UserInfo