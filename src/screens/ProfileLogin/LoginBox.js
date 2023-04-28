import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableHighlight } from "react-native";
const LoginBox = () => {
    const navigation = useNavigation()
    return (
        <>
            <TouchableHighlight underlayColor={'none'} onPress={() => { navigation.navigate('Home') }}>
                <View style={style.body}>
                    <View style={style.part}>
                        <View style={style.part}>
                            <View>
                                <Image source={require('../../assets/images/profile.png')} style={style.img} resizeMode="contain" />
                            </View>
                            <View style={{ justifyContent: "center", marginLeft: 25 }}>
                                <Text style={style.font}>{'Eren Jeager'}</Text>
                            </View>
                            <View style={[style.inner, { alignItems: "flex-end" }]}>
                                <Image source={require('../../assets/images/more.png')} resizeMode="contain" />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </>
    )
}
const style = StyleSheet.create({
    body: {
        height: 65,
    },
    part: {
        flex: 1,
        flexDirection: "row",
    },
    inner: {
        flex: 1,
        justifyContent: "center"
    },
    font: {
        fontSize: 18,
        fontWeight: "700",
        color: "#333"
    }, img: {
        height: 60,
        borderRadius: 10,
        width: 70
    }
})
export default LoginBox;