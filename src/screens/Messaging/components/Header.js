import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {styles} from '../styles';
import {myStyles} from '../../../Common/styles';
import {Post_profile} from '../../../Common/constant';
const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={[myStyles.coulmn2, myStyles.center]}>
          <Image
            source={require('../../../assets/images/Back.png')}
            style={styles.back}
          />
        </View>
        <View style={[myStyles.coulmn2, myStyles.center]}>
          <TouchableHighlight>
            <Image
              source={{
                uri: Post_profile,
              }}
              style={styles.user_icon}
            />
          </TouchableHighlight>
        </View>
        <View style={[myStyles.coulmn, {justifyContent: 'center'}]}>
          <View style={[myStyles.coulmn2]}>
            <Text style={styles.msg_user_name}>{'Maisy '}</Text>
          </View>
          <View style={[myStyles.coulmn2]}>
            <Text style={styles.msg_header_sub}>{'Hupheri Messanger'}</Text>
          </View>
        </View>
        <View style={[myStyles.coulmn2, myStyles.center]}>
          <Image
            source={require('../../../assets/images/Call.png')}
            style={styles.back}
          />
        </View>
        <View
          style={[myStyles.coulmn2, myStyles.center, {marginHorizontal: 5}]}>
          <Image
            source={require('../../../assets/images/VideoCall.png')}
            style={styles.back}
          />
        </View>
      </View>
    </>
  );
};
export default Header;
