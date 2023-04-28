import React from "react";
import { Image, StyleSheet, View, Text, TouchableHighlight, Dimensions } from "react-native";
import Colors from "../../../Common/Colors";
import { Post_profile, user_name } from "../../../Common/constant";
import { myStyles } from "../../../Common/styles";
import Video from "react-native-video";
const post_height = Dimensions.get('window').height
const Post = (props) => {
    return (
        <>
            <View style={styles.container}>
                <View style={[myStyles.coulmn2, myStyles.padding_10]}>
                    <View style={myStyles.row2}>
                        <View>
                            <Image source={{ uri: Post_profile }} style={myStyles.post_user} />
                        </View>
                        <View style={[[myStyles.coulmn, myStyles.hr_center, { paddingHorizontal: 5 }]]}>
                            <View>
                                <Text style={styles.post_name}>{user_name}<Text style={styles.text2}>{' with his  '}</Text>{'Tomadachi'}</Text>
                            </View>
                            <View style={[myStyles.row2, myStyles.vr_center]}>
                                <Text style={styles.details}>{'1 h . Lucknow   '}</Text>
                                <Image source={require('../../../assets/images/group2.png')} resizeMode={'contain'} style={{ height: 9, width: 9, tintColor: Colors.placeholder_txt }} />
                            </View>
                        </View>
                        <View style={{ paddingTop: 9 }}>
                            <Image source={require('../../../assets/images/setting.png')} resizeMode={'contain'} style={{ height: 13, width: 13, tintColor: Colors.placeholder_txt }} />
                        </View>
                    </View>
                </View>
                <View style={[myStyles.coulmn2, myStyles.padding_10]}>
                    <Text style={[styles.details, { color: Colors.black }]}>{'Good Show....!! ❤️ 😊'}</Text>
                </View>
                <View style={styles.post}>
                    {props.video ?
                        <Video poster={props.poster} source={{ uri: props.video }} style={myStyles.coulmn} resizeMode={'cover'} paused={props.paused} />
                        :
                        <Image source={{ uri: props.post_pic }} style={myStyles.coulmn} />
                    }
                </View>
                <View style={[myStyles.row2, myStyles.padding_10]}>
                    <TouchableHighlight>
                        <Image source={require('../../../assets/images/like.png')} resizeMode={'contain'} style={myStyles.post_icon} />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Image source={require('../../../assets/images/comment.png')} resizeMode={'contain'} style={myStyles.post_icon} />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Image source={require('../../../assets/images/chat.png')} resizeMode={'contain'} style={myStyles.post_icon} />
                    </TouchableHighlight>
                </View>
                <View style={[myStyles.row2, myStyles.vr_center, myStyles.padding_10]}>
                    <View style={myStyles.coulmn}>
                        <Text style={[styles.details, { color: Colors.black }]}>{'Liked by Sachin Kamble and 155 others '}</Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text style={[styles.details, { color: Colors.black, textAlign: "right" }]}>{'4  comments'}</Text>
                    </View>
                </View>

            </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.white,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: Colors.border,
        paddingVertical: 5
    },
    post_name: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black
    },
    details: {
        fontSize: 11,
        fontWeight: "400",
        color: Colors.placeholder_txt
    },
    text2: {
        fontSize: 11,
        color: "#333",
        fontWeight: "400"
    },
    post: {
        height: post_height / 1.7,
        width: "100%",
        marginVertical: 10,
        backgroundColor: '#e1e4e8',
    }
})
export default Post