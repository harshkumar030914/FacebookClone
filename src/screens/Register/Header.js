import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Header = (props) => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.heading}>{props.heading}</Text>
                <Text style={styles.para}>{props.para}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%"
    },
    heading: {
        fontSize: 18,
        color: "#333",
        fontWeight: "700",
        paddingVertical: 10,
        textAlign: "center"
    },
    para: {
        fontSize: 13,
        color: "gray",
        textAlign: "center"
    },
});
export default Header;