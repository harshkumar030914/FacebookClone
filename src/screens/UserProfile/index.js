import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Colors from "../../Common/Colors";
import { myStyles } from "../../Common/styles";
import Menu from "../../components/Menu";
import CoverHeader from "./components/CoverHeader";
import Button from "../../components/Button";
import SecondaryButton from "../../components/SecondaryButton";
import More from "../../assets/images/more.png";
import Lockicon from "../../assets/images/Lockicon.png";
import brifcase from "../../assets/images/brifcase.png";
import hat from "../../assets/images/hat.png";
import home from "../../assets/images/home.png";
import address from "../../assets/images/address.png";
import UserInfo from "./components/UserInfo";
import { Post_profile, Posts, Random_back } from "../../Common/constant";
import Post from "../Home/components/Post";
import { useDispatch, useSelector } from "react-redux";
import { debugLog } from "../../Common/common";
import { getItem } from "../../utils/utils";
import { hitProfileApi } from "../../config/api";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
const UserProfile = () => {
  const Profile_data = useSelector((state) => state.reducer.userdata);
  const action = bindActionCreators(actionCreators, useDispatch());
  const [loader, setloader] = useState(true);
  const Get_Profile = async () => {
    const param = {
      user_id: await getItem("user_id"),
    };
    debugLog(param);
    hitProfileApi(param)
      .then((res) => {
        debugLog(res);
        action.Insert_UserDetails(res);
        setloader(false);
      })
      .catch((err) => {
        debugLog(err);
        setloader(false);
      });
  };
  useEffect(() => {
    Get_Profile();
  }, []);
  const user_data = useSelector((state) => state.reducer.userdata);
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <View>
          <Menu user={true} />
        </View>
        <FlatList
          ListHeaderComponent={() => {
            return (
              <>
                <View>
                  <CoverHeader
                    userprofile={{
                      uri:
                        user_data && user_data.user_info
                          ? user_data.user_info.profilePicture
                          : Post_profile,
                    }}
                    cover_pic={{
                      uri:
                        user_data && user_data.user_info
                          ? user_data.user_info.coverPicture
                          : Random_back,
                    }}
                    loading={loader}
                  />
                </View>
                <View style={styles.main_section}>
                  <View>
                    {/* Home_User_name */}
                    <Text style={styles.name}>
                      {Profile_data && Profile_data.personal_info
                        ? Profile_data.personal_info.firstname + " "
                        : +"Guest"}
                      {Profile_data && Profile_data.personal_info
                        ? Profile_data.personal_info.lastname
                        : +""}
                    </Text>
                  </View>
                  <View style={[myStyles.row2, { marginTop: 15 }]}>
                    <View style={[myStyles.coulmn, { marginHorizontal: 16 }]}>
                      <Button radius={true} text={"Add to story"} />
                    </View>
                    <View style={myStyles.coulmn}>
                      <SecondaryButton title={"Edit profile"} />
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
                  <View
                    style={[myStyles.row, myStyles.margin_10, myStyles.center]}
                  >
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
                    <UserInfo
                      source={home}
                      text={"Lives in Lucknow, Uttar Pradesh"}
                    />
                    <UserInfo source={address} text={"From UP, India"} />
                  </View>
                </View>
              </>
            );
          }}
          data={Posts}
          renderItem={({ item }) => {
            return (
              <>
                <Post post_pic={item.post} />
              </>
            );
          }}
        />
      </SafeAreaView>
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
export default UserProfile;
