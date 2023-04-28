import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { myStyles } from "../../../Common/styles";
import { styles } from "../styles";
import ActiveBar from "./ActiveBar";
const Chatbox = (props) => {
    return (
        <>
            <View>
                <TouchableHighlight style={styles.box}>
                    <View style={myStyles.row}>
                        <View style={myStyles.coulmn2}>
                            <ActiveBar name={''} image={props.image}/>
                        </View>
                        <View style={[myStyles.coulmn, { justifyContent: "center" }]}>
                            <Text style={styles.user_name}>{props.name}</Text>
                            <Text style={styles.ago}>{'Last Seen 20h ago'}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        </>
    )
}
export default Chatbox