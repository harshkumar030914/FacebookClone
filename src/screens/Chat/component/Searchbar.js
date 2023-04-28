import React from "react";
import { Image, TouchableHighlight, View, Text } from "react-native";
import { styles } from "../styles";
import Search from "../../../assets/images/Search.png"
import { myStyles } from "../../../Common/styles";
const SearchBar = () => {
    return (
        <>
            <View style={myStyles.margin_10}>
                <TouchableHighlight style={styles.search_header}>
                    <View style={styles.row}>
                        <Image source={Search} style={styles.icon} />
                        <Text style={styles.txt}>{'Search'}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </>
    )
}
export default SearchBar