import React, { useCallback, useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { myStyles } from "../../Common/styles";
import ActiveBar from "./component/ActiveBar";
import Header from "./component/Header";
import SearchBar from "./component/Searchbar";
import { Friend_request_list } from "../../Common/constant";
import Chatbox from "./component/Chatbox";
import { hitgetMyFriendsApi } from "../../config/api";
import { getItem } from "../../utils/utils";
import { debugLog } from "../../Common/common";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const Chat = () => {
  const navigation = useNavigation();
  const Render_Item = ({ item }) => {
    return (
      <>
        <ActiveBar name={item.name} image={item.image} />
      </>
    );
  };
  const Chat_Item = useCallback(({ item }) => {
    return (
      <>
        <Chatbox
          onPress={() => {
            navigation.navigate("Messaging", {
              user_id: item._id,
            });
          }}
          image={item.user_info.profilePicture}
          name={item.personal_info.username}
        />
      </>
    );
  }, []);
  const action = bindActionCreators(actionCreators, useDispatch());
  const redux_data = useSelector((state) => state.reducer.myfriends);
  useEffect(() => {
    const get_friends_list = async () => {
      const param = {
        user_id: await getItem("user_id"),
      };
      hitgetMyFriendsApi(param)
        .then((res) => {
          action.Insert_MyFriends(res.results);
        })
        .catch((err) => {
          debugLog(err);
        });
    };
    get_friends_list();
  }, []);
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <View>
          <Header />
          <SearchBar />
        </View>
        <View>
          <View style={myStyles.row2}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={Friend_request_list}
              renderItem={Render_Item}
            />
          </View>
        </View>
        <FlatList data={redux_data} renderItem={Chat_Item} />
      </SafeAreaView>
    </>
  );
};
export default Chat;
