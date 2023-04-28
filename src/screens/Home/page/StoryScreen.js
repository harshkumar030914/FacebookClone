import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, SafeAreaView, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ProgressBar } from "react-native-paper";
import Colors from "../../../Common/Colors";
import { Post_profile, user_name } from "../../../Common/constant";
import { myStyles } from "../../../Common/styles";
import { heightPixel } from "../../../config/Normalize";
const StoryScreen = ({ route }) => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#080808" }}>
                <ImageBackground resizeMode="contain" source={{ uri: route.params.uri }} style={{ flex: 1, width: "100%" }}>
                    <ProgressBar style={{ height: 6, borderRadius: 1 }} progress={0.5} color={Colors.placeholder_txt} />
                    <View style={styles.header}>
                        <View style={myStyles.row}>
                            <View style={myStyles.center}>
                                <LinearGradient colors={['#384CFF', '#00A3FF']} style={styles.profile_logo}>
                                    <Image source={{ uri: Post_profile }} style={{ height: 60, width: 60, borderRadius: 60 }} />
                                </LinearGradient>
                            </View>
                            <View style={[myStyles.coulmn, { marginTop: 20, marginHorizontal: 16 }]}>
                                <Text style={styles.name}>{user_name + '   4h'}</Text>
                            </View>
                            <View style={[myStyles.row2, { marginTop: 20 }]}>
                                <Image source={require('../../../assets/images/setting.png')} resizeMode={'contain'} style={styles.setting} />
                                <TouchableOpacity onPress={() => { navigation.goBack('') }}>
                                    <Image source={require('../../../assets/images/Union.png')} resizeMode={'contain'} style={styles.back} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        height: heightPixel(100),
        marginTop: 20,
        marginHorizontal: 10
    },
    profile_logo: {
        height: 65,
        width: 65,
        borderRadius: 65,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white
    },
    setting: {
        height: 18,
        width: 18,
        tintColor: Colors.white,
        transform: [{ rotate: "90deg" }],
        marginRight: 15
    },
    back: {
        height: 10,
        width: 10,
        marginRight: 10,
        marginTop: 4
    }
})
export default StoryScreen