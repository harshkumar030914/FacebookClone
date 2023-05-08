import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
  ScrollView,
} from "react-native";
import Colors from "../../Common/Colors";
import { myStyles } from "../../Common/styles";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import SecondaryButton from "../../components/SecondaryButton";
import More from "../../assets/images/more.png";
import Lockicon from "../../assets/images/Lockicon.png";
import brifcase from "../../assets/images/brifcase.png";
import hat from "../../assets/images/hat.png";
import home from "../../assets/images/home.png";
import address from "../../assets/images/address.png";
import { Cover_image, Post_picture, Posts } from "../../Common/constant";
import Post from "../Home/components/Post";
import { useDispatch, useSelector } from "react-redux";
import { debugLog } from "../../Common/common";
import { hitAddFriendsApi, hitProfileApi } from "../../config/api";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import CoverHeader from "../UserProfile/components/CoverHeader";
import UserInfo from "../UserProfile/components/UserInfo";
import { getItem } from "../../utils/utils";
import Loader from "../../components/Loader";
const FriendsProfile = ({ route }) => {
  const { data, id } = route.params;
  const [apiloader, setapiloader] = useState(false);
  const Profile_data = useSelector((state) => state.reducer.friendprofile);
  const action = bindActionCreators(actionCreators, useDispatch());
  const [loader, setloader] = useState(true);
  useEffect(() => {
    const Get_Profile = async () => {
      const param = {
        user_id: id,
      };
      hitProfileApi(param)
        .then((res) => {
          action.FriendsProfile(res);
          setloader(false);
        })
        .catch((err) => {
          debugLog(err);
          setloader(false);
        });
    };
    Get_Profile();
  }, []);
  const Add_Friend = async () => {
    const param = { sender_id: await getItem("user_id"), receiver_id: id };
    setapiloader(true);
    hitAddFriendsApi(param)
      .then((res) => {
        debugLog(res);
        showToastWithGravityAndOffset(res.message);
        setapiloader(false);
      })
      .catch((err) => {
        setapiloader(false);
        debugLog(err);
      })
      .finally(() => {
        setapiloader(false);
        debugLog("Sent");
      });
  };
  const showToastWithGravityAndOffset = (param) => {
    ToastAndroid.showWithGravityAndOffset(
      param,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  const render_header = useCallback(({ item }) => {
    return (
      <>
        <View>
          <CoverHeader
            loading={loader}
            cover_pic={{
              uri:
                Profile_data && Profile_data.user_info
                  ? Profile_data.user_info.coverPicture
                  : Cover_image,
            }}
            userprofile={{
              uri:
                Profile_data && Profile_data.user_info
                  ? Profile_data.user_info.profilePicture
                  : Post_picture,
            }}
          />
        </View>
        <View style={styles.main_section}>
          <View>
            {/* Home_User_name */}
            <Text style={styles.name}>
              {Profile_data && Profile_data.personal_info
                ? Profile_data.personal_info.firstname +
                  " " +
                  Profile_data.personal_info.lastname
                : ""}
            </Text>
          </View>
          <View style={[myStyles.row2, { marginTop: 15 }]}>
            <View style={[myStyles.coulmn, { marginHorizontal: 16 }]}>
              {data.friends == 0 && data.send_by == 0 && (
                <Button
                  onPress={Add_Friend}
                  showicon={require("../../assets/images/add-friend.png")}
                  radius={true}
                  text={"Add Friend"}
                />
              )}
            </View>
            <View style={myStyles.coulmn}>
              <SecondaryButton
                title={"Message"}
                showicon={require("../../assets/images/msgicon.png")}
              />
            </View>
            <View style={[myStyles.hr_center, { marginRight: 5 }]}>
              <TouchableOpacity>
                <Image source={More} resizeMode={"contain"} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[myStyles.row2, styles.margin]}>
            <View>
              <TouchableOpacity>
                <Image
                  source={Lockicon}
                  resizeMode={"contain"}
                  style={styles.lock}
                />
              </TouchableOpacity>
            </View>
            <View style={myStyles.margin_10}>
              <Text style={styles.para}>
                {"You locked your profile\n"}
                <Text style={[styles.para, { color: Colors.blue }]}>
                  {"Learn more"}
                </Text>
              </Text>
            </View>
          </View>
          <View style={myStyles.seperator} />
          {/* Count Section */}
          <View style={[myStyles.row, myStyles.margin_10, myStyles.center]}>
            <View style={myStyles.coulmn}>
              <Text style={styles.counts}>
                {"Post\n"}
                <Text>{"168"}</Text>
              </Text>
            </View>
            <View style={myStyles.coulmn}>
              <Text style={styles.counts}>
                {"Friends\n"}
                <Text>{"545"}</Text>
              </Text>
            </View>
          </View>
          <View style={myStyles.seperator} />
          <View style={{ marginVertical: 10 }}>
            <UserInfo
              source={brifcase}
              text={"Founder and CEO at A to Z company Ltd."}
            />
            <UserInfo
              source={hat}
              text={"Studied Computer Science at \nHarvard University"}
            />
            <UserInfo source={home} text={"Lives in Lucknow, Uttar Pradesh"} />
            <UserInfo source={address} text={"From UP, India"} />
          </View>
        </View>
      </>
    );
  }, []);
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <View>
          <Menu user={true} />
        </View>
        <ScrollView></ScrollView>
        <FlatList
          data={Posts}
          ListHeaderComponent={render_header}
          renderItem={({ item }) => {
            return (
              <>
                <Post post_pic={item.post} />
              </>
            );
          }}
        />
      </SafeAreaView>
      <Loader loader={apiloader} />
    </>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.black,
    textAlign: "center",
  },
  main_section: {
    marginTop: 35,
  },
  lock: {
    height: 35,
    width: 32,
  },
  margin: {
    marginHorizontal: 16,
    marginTop: 15,
  },
  para: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
  counts: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.blue,
    textAlign: "center",
    letterSpacing: 0.5,
    paddingTop: 8,
    paddingHorizontal: 10,
  },
});
export default FriendsProfile;
