import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { heightPixel, widthPixel } from "../config/Normalize";
import Font from "../Common/Font";
import Colors from "../Common/Colors";
import { myStyles } from "../Common/styles";
const OuterHeader = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          height: heightPixel(55),
          borderBottomWidth: 0.5,
          borderBottomColor: Colors.border,
        }}
      >
        <View style={myStyles.row}>
          <View style={myStyles.hr_center}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack("");
              }}
            >
              <Image
                source={require("../../src/assets/images/Left.png")}
                resizeMode="contain"
                style={{
                  height: 14,
                  width: 14,
                  tintColor: "black",
                  marginHorizontal: 16,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={[myStyles.coulmn2, myStyles.center]}>
            <Text style={style.text}>{props.header}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.skip_txt,
    fontFamily: Font.txt_medium,
  },
});
export default OuterHeader;
