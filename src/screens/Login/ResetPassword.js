import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import Button from "../../components/Button";
import OuterHeader from "../../components/OuterHeader"
import Header from "../Register/Header";
import TextBox from "../Register/TextBox";
const ResetPassword = ({ navigation }) => {
    const [pass, setpass] = useState('')
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <OuterHeader header="Reset your Password" />
                <ScrollView>
                    <Header
                        heading={"Create a new password"}
                        para={"You will use this password to access your account.\n Enter a combination of atleast six numbers,letters\n and pancuation marks"}
                    />
                    <View style={styles.container}>
                        <View style={styles.part}>
                            <TextBox
                                label={"Password"}
                                value={pass}
                                onChangeText={(e) => {
                                    setpass(e)
                                }}
                                isPassword={true}
                            />
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <Button text="Login" onPress={() => {
                            navigation.navigate("Login")
                        }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: "5%"
    },
    part: {
        flex: 1,
        marginHorizontal: 15
    },
    container2: {
        marginVertical: "30%",
        marginHorizontal: 16
    }
})
export default ResetPassword;