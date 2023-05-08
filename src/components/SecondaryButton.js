import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import Colors from "../Common/Colors";
import { myStyles } from "../Common/styles";
const SecondaryButton = ({ onPress, title, showicon }) => {
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <View style={[myStyles.row2, myStyles.center]}>
          {showicon && (
            <Image
              style={{
                height: 16,
                width: 15,
                tintColor: Colors.secondary_txt,
                marginRight: 5,
              }}
              source={showicon}
              resizeMode="contain"
            />
          )}
          <Text style={[myStyles.buttonText, { color: Colors.secondary_txt }]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary_btn,
    paddingLeft: 15,
    elevation: 1,
    paddingRight: 15,
  },
});
export default SecondaryButton;
