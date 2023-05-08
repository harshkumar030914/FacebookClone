import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { myStyles } from "../../Common/styles";
import SearchBar from "../../components/SearchBar";
import UserBox from "./component/UserBox";
import { debugLog } from "../../Common/common";
import { hitFindUserApi } from "../../config/api";
import { getItem } from "../../utils/utils";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
const SearchUser = () => {
  const navigation = useNavigation();
  const [text, settext] = useState("");
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const getItemLayout = (_, index) => ({
    length: 70,
    offset: 70 * index,
    index,
  });
  const _keyExtractor = (item, index) => index.toString();
  const CallSearchUser = async (e) => {
    settext(e);
    const param = {
      query: text,
      user_id: await getItem("user_id"),
    };
    hitFindUserApi(param)
      .then((res) => {
        debugLog(res);
        if (res.status != 0) {
          setdata(res.results);
        }
      })
      .catch((err) => {
        debugLog(err);
      });
  };
  const renderItem = useCallback(({ item }) => {
    return (
      <>
        <UserBox
          user_name={item.personal_info.username}
          user_pic={item.user_info.profilePicture}
          friend={item.friends}
          onPress={() => {
            navigation.navigate("FriendsProfile", {
              id: item._id,
              data: item,
            });
          }}
        />
      </>
    );
  }, []);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {

      CallSearchUser(text);
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <>
      <View style={myStyles.background}>
        <View>
          <SearchBar
            onChange={CallSearchUser}
            value={text}
            onClear={() => settext("")}
          />
        </View>
        <FlashList
          data={data}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          keyExtractor={_keyExtractor}
          estimatedItemSize={80}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
});

export default SearchUser;
