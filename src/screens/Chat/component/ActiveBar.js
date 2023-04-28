import React from "react";
import { TouchableHighlight, View, Image, Text } from "react-native";
import { myStyles } from "../../../Common/styles";
import { styles } from "../styles";
const ActiveBar = (props) => {
    return (
        <>

            <View style={[myStyles.coulmn2, {  margin: 10 }]}>
                <TouchableHighlight style={styles.active_container}>
                    <View style={myStyles.col_center}>
                        <Image source={{ uri: props.image }} style={styles.active_container} />
                        <View style={styles.active_dot}>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={myStyles.coulmn2}>
                    <Text style={styles.name}>{props.name.split(' ').join('\n')}</Text>
                </View>
            </View>
        </>
    )
}
export default ActiveBar;