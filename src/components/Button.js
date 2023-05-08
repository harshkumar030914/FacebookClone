import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { myStyles } from "../Common/styles";
import { TouchableRipple } from "react-native-paper";
import Colors from "../Common/Colors";
const Button = ({ disabled, onPress, text, styles, radius, showicon }) => {
  return (
    <>
      <TouchableRipple disabled={disabled} onPress={onPress}>
        <LinearGradient
          colors={["#384CFF", "#00A3FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            style.linearGradient,
            styles,
            {
              borderRadius: !radius ? 25 : 5,
              height: !radius ? 45 : null,
            },
          ]}
        >
          <View style={[myStyles.row2, myStyles.center]}>
            {showicon && (
              <Image
                style={{
                  height: 16,
                  width: 15,
                  tintColor: Colors.white,
                  marginRight: 5,
                }}
                source={showicon}
                resizeMode="contain"
              />
            )}
            <Text style={myStyles.buttonText}>{text}</Text>
          </View>
        </LinearGradient>
      </TouchableRipple>
    </>
  );
};
const style = StyleSheet.create({
  linearGradient: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(28, 120, 255, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 9,
    elevation: 6,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default Button;
