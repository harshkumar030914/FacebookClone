import React, { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableHighlight } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { StyleSheet } from "react-native";
import { openPicker } from "@baronha/react-native-multiple-image-picker";
import { myStyles } from "../../Common/styles";
import OuterHeader from "../../components/OuterHeader";
import { Post_profile } from "../../Common/constant";
import Colors from "../../Common/Colors";
import Font from "../../Common/Font";
import HashtagTextInput from "./component/SuggestionBox";
import Button from "../../components/Button";
export default function UploadPostScreen() {
  const [images, setImages] = useState([]);
  const onPicker = async () => {
    try {
      const singleSelectedMode = false;
      const response = await openPicker({
        selectedAssets: images,
        isExportThumbnail: true,
        maxVideo: 1,
        doneTitle: "Done",
        singleSelectedMode,
        isCrop: true,
      });

      const crop = response.crop;

      if (crop) {
        response.path = crop.path;
        response.width = crop.width;
        response.height = crop.height;
      }

      setImages(response);
    } catch (e) {}
  };
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <ScrollView>
          <View>
            <OuterHeader header={"Create Post"} />
          </View>
          <View>
            <View
              style={[
                myStyles.row2,
                { marginHorizontal: 7, marginVertical: 5 },
              ]}
            >
              <View style={[myStyles.coulmn2, { marginVertical: 5 }]}>
                <Image
                  source={{ uri: Post_profile }}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 60,
                    borderColor: Colors.gray3,
                    borderWidth: 1,
                  }}
                />
              </View>
              <View style={[myStyles.coulmn2, { marginHorizontal: 10 }]}>
                <View style={[myStyles.coulmn2, { marginVertical: 3 }]}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: Colors.skip_txt,
                      fontFamily: Font.txt_medium,
                      fontWeight: "700",
                    }}
                  >
                    {"Guest123"}
                  </Text>
                </View>
                <View style={myStyles.coulmn2}>
                  <TouchableHighlight
                    style={{
                      height: 30,
                      width: 110,
                      borderRadius: 5,
                      backgroundColor: "#e5e6eb",
                    }}
                  >
                    <View
                      style={[
                        myStyles.row,
                        {
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginHorizontal: 8,
                        },
                      ]}
                    >
                      <Icon name="lock" size={20} color={Colors.black} />
                      <Text
                        style={{
                          fontSize: 12,
                          color: Colors.drop_txt,
                          fontFamily: Font.txt_medium,
                        }}
                      >
                        {"Only Me"}
                      </Text>
                      <Icon name="caret-down" size={15} color={Colors.black} />
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={{ marginHorizontal: 16 }}>
              <HashtagTextInput />
            </View>
            <View style={{ marginTop: 20 }}>
              <PostSettingButton
                tintColor={"#8bbc50"}
                icon={require("../../assets/images/image2.png")}
                text={"Photo/Videos"}
                onPress={onPicker}
              />
              <PostSettingButton
                tintColor={"#1863d1"}
                icon={require("../../assets/images/add-friend.png")}
                text={"Tag friends"}
              />
              <PostSettingButton
                tintColor={"#fc5776"}
                icon={require("../../assets/images/address.png")}
                text={"Add Location"}
              />
              <PostSettingButton
                tintColor={"#f7b928"}
                icon={require("../../assets/images/Emoji.png")}
                text={"Feeling/Activity"}
              />
              <PostSettingButton
                tintColor={"#f0294a"}
                icon={require("../../assets/images/VideoCall.png")}
                text={"Go Live"}
              />
            </View>
          </View>
          <View style={[myStyles.margin_10, { marginVertical: 16 }]}>
            <Button text={"Post"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const PostSettingButton = ({ icon, text, onPress, tintColor }) => {
  return (
    <>
      <TouchableHighlight
        underlayColor={"none"}
        style={{
          height: 30,
          marginVertical: 5,
          marginHorizontal: 5,
        }}
        onPress={onPress}
      >
        <View style={myStyles.row}>
          <View
            style={[
              myStyles.row2,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Image
              source={icon}
              style={{
                height: 15,
                width: 15,
                marginHorizontal: 10,
                tintColor: tintColor,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={[
              myStyles.row2,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#333",
                fontFamily: Font.txt_normal,
              }}
            >
              {text}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
};
const style = StyleSheet.create({});
