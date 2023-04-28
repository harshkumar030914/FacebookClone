import React from 'react';
import {Image, View, Text} from 'react-native';
import {myStyles} from '../../../Common/styles';
import {styles} from '../styles';
import {Post_profile} from '../../../Common/constant';
const MessageHeader = () => {
  return (
    <>
      <View style={[myStyles.coulmn, myStyles.center, {marginTop: '5%'}]}>
        <View style={styles.msh_mainHeader_wrapper}>
          <View style={myStyles.coulmn}>
            <View style={[myStyles.coulmn2, myStyles.center]}>
              <Image source={{uri: Post_profile}} style={styles.pic} />
            </View>
            <View style={[myStyles.coulmn2, myStyles.center]}>
              <Text
                style={[
                  styles.msg_user_name,
                  {paddingTop: 16, paddingBottom: 5, fontSize: 16},
                ]}>
                {'Maisy '}
              </Text>
              <Text style={styles.msg_header_sub}>
                {'You’re friends on Facebook'}
              </Text>
            </View>
            <View style={[myStyles.coulmn2, myStyles.center]}>
              <View
                style={[
                  myStyles.coulmn2,
                  {
                    position: 'relative',
                    height: 49,
                    width: '100%',
                    marginTop: '5%',
                    left: '35%',
                  },
                ]}>
                <Image source={{uri: Post_profile}} style={styles.pic2} />
                <Image
                  source={{
                    uri: 'https://randomuser.me/api/portraits/med/men/7.jpg',
                  }}
                  style={styles.pic1}
                />
              </View>
              <Text
                style={[
                  styles.msg_header_sub,
                  {color: '#555555', fontSize: 11},
                ]}>
                {'Say hi to your new Facebook friend, Maisy.'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default MessageHeader;
