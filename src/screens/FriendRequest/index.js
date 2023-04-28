import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import Colors from '../../Common/Colors';
import {myStyles} from '../../Common/styles';
import Button from '../../components/Button';
import CustomPart from '../../components/CustomPart';
import Menu from '../../components/Menu';
import FriendRequestBox from './components/FriendRequestBox';
import Font from '../../Common/Font';
import {hitGetReqListApi} from '../../config/api';
import {debugLog, timeSince} from '../../Common/common';
import {getItem} from '../../utils/utils';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../redux';
import {ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const FriendRequest = () => {
  const navigation = useNavigation();
  const redux_data = useSelector(state => state.reducer.friendlist);
  const action = bindActionCreators(actionCreators, useDispatch());
  const [loader, setloader] = useState(true);
  const getItemLayout = (_, index) => ({
    length: 82,
    offset: 82 * index,
    index,
  });
  const _keyExtractor = (item, index) => index.toString();
  const renderItem = useCallback(
    ({item}) => (
      <View style={myStyles.margin_10}>
        <FriendRequestBox
          user_profile={item.users[0].user_info.profilePicture}
          user_name={item.users[0].personal_info.username}
          ago={timeSince(new Date(item.users[0].createdAt))}
          mutual={'2'}
        />
      </View>
    ),
    [],
  );
  const renderHeader = useCallback(() => {
    return (
      <>
        <View style={[myStyles.row, myStyles.margin_10, myStyles.mv_10]}>
          <View style={myStyles.coulmn}>
            <Text style={style.heading}>
              {'Friend request'}
              <Text style={[style.heading, {color: Colors.red}]}>
                {' ' + redux_data.length}
              </Text>
            </Text>
          </View>
          <View style={myStyles.coulmn}>
            <Text style={style.see}>{'See All'}</Text>
          </View>
        </View>
      </>
    );
  }, []);
  const fetch_data = async () => {
    const param = {
      user_id: await getItem('user_id'),
    };
    try {
      hitGetReqListApi(param)
        .then(res => {
          setloader(false);
          action.Insert_RequestList(res.result);
        })
        .catch(err => {
          debugLog(err);
        });
    } catch (error) {
      debugLog(error);
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <View style={{marginTop: 10}}>
          <Menu RequestList={true} />
        </View>
        <View style={[myStyles.margin_10, {paddingTop: 5}]}>
          <CustomPart
            onSearch={() => {
              navigation.navigate('Searchuser');
            }}
            text={'Friends'}
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
          ]}>
          <View style={myStyles.margin_10}>
            <Button radius={true} text={'Suggestions'} />
          </View>
          <Button radius={true} text={'Your Friends'} />
        </View>
        {loader && !redux_data.length > 0 ? (
          <ActivityIndicator
            size={'small'}
            style={{marginTop: 20}}
            color={Colors.blue}
          />
        ) : (
          <FlatList
            ListHeaderComponent={renderHeader}
            showsVerticalScrollIndicator={false}
            data={redux_data}
            renderItem={renderItem}
            keyExtractor={_keyExtractor}
            getItemLayout={getItemLayout}
          />
        )}
      </SafeAreaView>
    </>
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
    fontWeight: '400',
    color: Colors.blue_txt,
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontFamily: Font.txt_normal,
  },
});
