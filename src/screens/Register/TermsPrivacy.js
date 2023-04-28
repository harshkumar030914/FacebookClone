import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import Button from "../../components/Button";
import OuterHeader from "../../components/OuterHeader"
import Header from "./Header";
const Terms = ({ navigation }) => {
    const [pass, setpass] = useState('')

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <OuterHeader header="Terms & Privacy" />
                <ScrollView>
                    <Header
                        heading={"Finishing signing up"}
                        para={"By tapping Sign up, you agree to our"}
                    />
                    <View style={styles.header2}>
                        <Text style={{ color: "blue", fontSize: 13 }}>{'Terms , Data Policy '}<Text style={{ color: "gray" }}>{'and'}</Text>{'Cookies Policy'}</Text>
                    </View>
                    <View style={styles.container2}>
                        <Button text="Sign Up" onPress={() => {
                            navigation.navigate("Home")
                        }} />
                        <Text style={styles.text}>{'Sign up without updating my contact'}</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={[styles.text, { color: "gray" }]}>{'The Facebook company is now Meta.We ve updated our Terms of Use,Data Policy and Cookies Policy to reflect the new name on 4 January 2022. While our company name has changed,we are continuing to offer the same products, including the Facebook app from Meta.Our Data Policy and Terms of Service remain in effect,Learn more about Meta and our vision for the Metaverse.'}
                        </Text>
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
        marginHorizontal: 16,
    },
    header2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "blue",
        fontSize: 13,
        textAlign: "center",
        marginTop: "5%",
    }
})
export default Terms;