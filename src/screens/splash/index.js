import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(function () {
            navigation.navigate("Onboard")
        }, 3000);
    }, [])
    return (
        <>
            <SafeAreaView style={styles.main}>
                <View style={styles.body}>
                    <Image source={require('../../assets/images/one.png')} resizeMode="contain" style={styles.one} />
                </View>
                <View style={styles.body}>
                    <Image source={require('../../assets/images/Metalogo.png')} resizeMode="contain" style={styles.two} />
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    one: {
        height: 163,
        width: 129
    },
    two: {
        height: 60,
        marginBottom: 10
    },
    main: {
        flex: 1,
        backgroundColor: "#fff"
    }
})
export default Splash;