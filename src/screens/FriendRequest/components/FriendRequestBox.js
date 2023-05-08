import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { myStyles } from "../../../Common/styles";
import Colors from "../../../Common/Colors";
import Button from "../../../components/Button";
import SecondaryButton from "../../../components/SecondaryButton";
import Font from "../../../Common/Font";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
const FriendRequestBox = (props) => {
  return (
    <>
      <View style={[myStyles.row, { marginBottom: 12 }]}>
        <View>
          <SkeletonContent
            containerStyle={{ flex: 1 }}
            isLoading={props.isLoading}
            layout={[{ key: "1", width: 70, height: "100%", marginBottom: 6 }]}
          >
            <Image
              source={{ uri: props.user_profile }}
              style={styles.img}
              resizeMode={"cover"}
            />
          </SkeletonContent>
        </View>
        <View style={myStyles.coulmn}>
          <View style={[myStyles.coulmn2, { marginHorizontal: 5 }]}>
            <View style={myStyles.row}>
              <View style={myStyles.coulmn}>
                <Text style={styles.name}>{props.user_name}</Text>
                <Text
                  style={[
                    styles.time,
                    {
                      fontSize: 11,
                      textAlign: "left",
                      fontFamily: Font.txt_normal,
                    },
                  ]}
                >
                  {props.mutual + " mutual friends"}
                </Text>
              </View>
              <View style={myStyles.coulmn}>
                <Text style={styles.time}>{props.ago}</Text>
              </View>
            </View>
          </View>
          <View style={[myStyles.coulmn2, { marginTop: 5 }]}>
            <View style={myStyles.row2}>
              {!props.isFriend ? (
                <>
                  <View style={[myStyles.coulmn, { marginHorizontal: 5 }]}>
                    <Button
                      styles={styles.btn}
                      radius={true}
                      text={"Confirm"}
                      onPress={props.onConfirm}
                      onLoad={props.onLoad}
                    />
                  </View>
                  <View style={[myStyles.coulmn, { marginHorizontal: 5 }]}>
                    <SecondaryButton
                      title={"Reject"}
                      onPress={props.onReject}
                      onLoad={props.onLoad}
                    />
                  </View>
                </>
              ) : (
                <View style={[myStyles.coulmn2, { marginHorizontal: 5 }]}>
                  <Text style={styles.time}>{"You are now friends"}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 82,
    width: 70,
    borderRadius: 10,
  },
  btn: {
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  time: {
    fontSize: 13,
    fontWeight: "400",
    color: Colors.placeholder_txt,
    textAlign: "right",
    fontFamily: Font.txt_medium,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
    fontFamily: Font.txt_medium,
  },
});
export default FriendRequestBox;
