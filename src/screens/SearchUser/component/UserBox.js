import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../Common/Colors";
import { myStyles } from "../../../Common/styles";
import Font from "../../../Common/Font";
const UserBox = ({ user_pic, user_name, friend, onPress }) => {
  return (
    <>
      <TouchableOpacity style={style.wrapper} onPress={onPress}>
        <View style={myStyles.row}>
          <View>
            <Image source={{ uri: user_pic }} style={style.userpic} />
          </View>
          <View style={myStyles.coulmn}>
            <View style={[myStyles.coulmn, { justifyContent: "center" }]}>
              <Text style={style.name}>{user_name}</Text>
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
            <TouchableOpacity style={style.btn}>
              <Image
                source={
                  friend
                    ? require("../../../assets/images/msgicon.png")
                    : require("../../../assets/images/add-friend.png")
                }
                style={{ height: 20, width: 20, tintColor: Colors.gray }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
const style = StyleSheet.create({
  wrapper: {
    height: 70,
    backgroundColor: Colors.background,
    borderBottomWidth: 0.4,
    borderColor: Colors.gray3,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  btn: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.gray3,
    justifyContent: "center",
    alignItems: "center",
  },
  userpic: {
    height: 60,
    width: 60,
    borderRadius: 70,
    borderWidth: 1.5,
    borderColor: Colors.gray,
  },
  name: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.txt_medium,
    fontWeight: "700",
    paddingHorizontal: 16,
    paddingBottom: 2,
  },
});
export default UserBox;
