import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";
import Colors from "../../Common/Colors";
import { myStyles } from "../../Common/styles";
import Button from "../../components/Button";
import CustomPart from "../../components/CustomPart";
import Menu from "../../components/Menu";
import FriendRequestBox from "./components/FriendRequestBox";
import Font from "../../Common/Font";
import {
  hitGetReqListApi,
  hitactionOnFriendRequestApi,
} from "../../config/api";
import { debugLog, timeSince } from "../../Common/common";
import { getItem } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Loader from "../../components/Loader";
const FriendRequest = () => {
  const navigation = useNavigation();
  const redux_data = useSelector((state) => state.reducer.friendlist);
  const action = bindActionCreators(actionCreators, useDispatch());
  const [count, setcount] = useState(0);
  const [loader, setloader] = useState(true);
  const [index, setindex] = useState(0);
  const [actreqloader, setactreqloader] = useState(false);
  const [sender_id, setsender_id] = useState(0);
  const [visible, setvisible] = useState(false);
  const toggle = () => (visible ? setvisible(false) : setvisible(true));
  const getItemLayout = (_, index) => ({
    length: 82,
    offset: 82 * index,
    index,
  });
  const _keyExtractor = (item, index) => index.toString();
  const fetch_data = async () => {
    const param = {
      user_id: await getItem("user_id"),
    };
    try {
      hitGetReqListApi(param)
        .then((res) => {
          setloader(false);
          setcount(res.result.length);
          action.Insert_RequestList(
            res.result.map((item, i) => ({
              ...item,
              isFriend: false,
              index: i,
            }))
          );
        })
        .catch((err) => {
          setloader(false);
          debugLog(err);
        });
    } catch (error) {
      setloader(false);
      debugLog(error);
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);
  const Action_On_request = async (status) => {
    setactreqloader(true);
    const param = {
      sender_id: sender_id,
      user_id: await getItem("user_id"),
      status: status,
    };
    hitactionOnFriendRequestApi(param)
      .then((res) => {
        if (res.status == 1) {
          action.Insert_RequestList(
            redux_data.map((e) => {
              if (e.index === index) {
                return { ...e, isFriend: true };
              } else return e;
            })
          );
          setactreqloader(false);
        } else {
          Alert.alert("Server error");
          setactreqloader(false);
        }
      })
      .catch((err) => {
        setactreqloader(false);
        debugLog(err);
      });
  };
  const renderItem = useCallback(
    ({ item, index }) => (
      <View style={myStyles.margin_10}>
        <FriendRequestBox
          user_profile={item.users[0].user_info.profilePicture}
          user_name={item.users[0].personal_info.username}
          ago={timeSince(new Date(item.timestamp))}
          mutual={"2"}
          onConfirm={() => {
            setsender_id(item.users[0]._id);
            setindex(item.index);
            toggle();
          }}
          onReject={() => {
            setindex(item.index);
            setsender_id(item.users[0]._id);
            toggle();
          }}
          isFriend={item.isFriend}
          isLoading={loader}
        />
      </View>
    ),
    []
  );
  const renderHeader = useCallback(() => {
    return (
      <>
        <View style={[myStyles.row, myStyles.margin_10, myStyles.mv_10]}>
          <View style={myStyles.coulmn}>
            <Text style={style.heading}>
              {"Friend request"}
              <Text style={[style.heading, { color: Colors.red }]}>
                {" " + count}
              </Text>
            </Text>
          </View>
          <View style={myStyles.coulmn}>
            <Text style={style.see}>{"See All"}</Text>
          </View>
        </View>
      </>
    );
  }, [count]);
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <View style={{ marginTop: 10 }}>
          <Menu RequestList={true} />
        </View>
        <View style={[myStyles.margin_10, { paddingTop: 5 }]}>
          <CustomPart
            onSearch={() => {
              navigation.navigate("Searchuser");
            }}
            text={"Friends"}
          />
        </View>
        <View
          style={[
            myStyles.row2,
            {
              borderBottomWidth: 0.5,
              paddingBottom: 10,
              borderColor: Colors.border,
            },
          ]}
        >
          <View style={myStyles.margin_10}>
            <Button radius={true} text={"Suggestions"} />
          </View>
          <Button radius={true} text={"Your Friends"} />
        </View>
        <FlatList
          ListHeaderComponent={renderHeader}
          showsVerticalScrollIndicator={false}
          data={redux_data}
          renderItem={renderItem}
          keyExtractor={_keyExtractor}
          getItemLayout={getItemLayout}
        />
        <AcceptFriendRequestModal
          isVisible={visible}
          onClose={() => {
            toggle();
          }}
          msg={"Do you want to accept this friend request?"}
          handleAccept={() => {
            toggle();
            Action_On_request(2);
          }}
          rightbtn={"Accept"}
        />
        <Loader loader={actreqloader} />
      </SafeAreaView>
    </>
  );
};
export const AcceptFriendRequestModal = ({
  isVisible,
  onClose,
  handleAccept,
  msg,
  rightbtn,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={style.container}>
        <View style={style.content}>
          <Text style={style.title}>{"Friend Request"}</Text>
          <Text style={style.message}>{msg}</Text>
          <View style={style.buttonContainer}>
            <TouchableOpacity style={style.cancelButton} onPress={onClose}>
              <Text style={style.cancelButtonText}>{"Cancel"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.acceptButton} onPress={handleAccept}>
              <Text style={style.acceptButtonText}>{rightbtn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FriendRequest;
const style = StyleSheet.create({
  heading: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.txt_medium,
  },
  see: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.blue_txt,
    textAlign: "right",
    textDecorationLine: "underline",
    fontFamily: Font.txt_normal,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: Font.txt_medium,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  cancelButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontFamily: Font.txt_medium,
    fontSize: 16,
  },
  acceptButton: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  acceptButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontFamily: Font.txt_medium,
    fontSize: 16,
  },
});
