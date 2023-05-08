import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { myStyles } from "../../Common/styles";
import Header from "./components/Header";
import MessageHeader from "./components/MessageHeader";
import Colors from "../../Common/Colors";
import LinearGradient from "react-native-linear-gradient";
import Font from "../../Common/Font";

const Messaging = () => {
  const [message, setmessage] = useState("");
  const _handlemessage = (msg) => {
    setmessage(msg);
  };
  const data = [
    {
      id: 1,
      msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 1,
      msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 1,
      msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];
  const msg_style = {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    alignSelf: "flex-start",
    backgroundColor: "#EEEEEE",
  };
  const Align_msg_style = {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignSelf: "flex-end",
  };
  const MsgBox = ({ id, message }) => {
    return (
      <>
        {id == 1 ? (
          <View style={styles.container}>
            <View style={[styles.viewBox, msg_style]}>
              <Text style={styles.textContent} value={message} multiline>
                {message}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <LinearGradient
              colors={["#384CFF", "#00A3FF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.viewBox, Align_msg_style]}
            >
              <Text
                style={[styles.textContent, { color: Colors.white }]}
                value={message}
                multiline
              >
                {message}
              </Text>
            </LinearGradient>
          </View>
        )}
      </>
    );
  };
  const keyExtractor = (item, index) => item.id.toString() + index;

  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <View>
          <Header />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((e) => {
            return <></>;
          })}
        </ScrollView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          ListHeaderComponent={() => {
            return <MessageHeader />;
          }}
          renderItem={({ item }) => {
            return <MsgBox id={item.id == 1} message={item.msg} />;
          }}
          keyExtractor={keyExtractor}
        />
      </SafeAreaView>
      <View style={{ backgroundColor: Colors.background }}>
        <TouchableHighlight
          style={{
            height: message.length > 50 ? 60 : 40,
            backgroundColor: "#EEEEEE",
            borderRadius: 18,
            marginVertical: 5,
            marginHorizontal: 10,
          }}
        >
          <View style={myStyles.row2}>
            <View style={myStyles.coulmn}>
              <TextInput
                placeholder="Type Your Message Here..."
                style={{
                  height: message.length > 50 ? 60 : 40,
                  marginHorizontal: 10,
                  fontSize: 12,
                  fontWeight: "600",
                  fontFamily: Font.txt_medium,
                }}
                value={message}
                onChangeText={_handlemessage}
                multiline
                numberOfLines={4}
              />
            </View>
            <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
              {message == "" ? (
                <Image
                  source={require("../../assets/images/Emoji.png")}
                  style={{ height: 25, width: 25, borderRadius: 25 }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../../assets/images/send.png")}
                  style={{ height: 25, width: 25, borderRadius: 25 }}
                  resizeMode="contain"
                />
              )}
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};
export default Messaging;
const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
  },
  viewBox: {
    borderColor: "gray",
    padding: 8,
    width: "70%",
  },
  textContent: {
    flex: 1,
    alignSelf: "stretch",
    padding: 4,
    fontFamily: Font.txt_normal,
  },
});
