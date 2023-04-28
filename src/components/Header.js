import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { myStyles } from "../Common/styles";
const Header = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView>
                <View style={styles.header}>
                    <View style={[myStyles.coulmn, myStyles.hr_center]}>
                        <Image source={require('../assets/images/Facebook.png')} resizeMode={'contain'} style={{ height: 20 }} />
                    </View>
                    <View style={[myStyles.coulmn, { justifyContent: "center", alignItems: "flex-end", paddingRight: 10 }]}>
                        <TouchableHighlight underlayColor={'none'} onPress={() => { navigation.navigate('Chat') }}>
                            <Image source={require('../assets/images/msg.png')} resizeMode="contain" style={{ height: 35, width: 35 }} />
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 40,
        flexDirection: "row",
        paddingVertical: 5
    },
    text1: {
        fontSize: 28,
        fontWeight: "800",
        color: "#384CFF",
        justifyContent: "center",
        paddingHorizontal: 10
    }
})
export default Header;