import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../Common/Colors';
const Menu = props => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          {props.home ? (
            <Image
              source={require('../assets/images/btm_home.png')}
              resizeMode="contain"
              style={[
                styles.icon,
              ]}
            />
          ) : (
            <Image
              source={require('../assets/images/Home.png')}
              resizeMode="contain"
              style={[
                styles.icon,
                {tintColor: props.home ? Colors.blue_txt : '#333'},
              ]}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => {
            navigation.navigate('FriendRequest');
          }}>
          <Image
            source={require('../assets/images/group.png')}
            resizeMode="contain"
            style={[
              styles.icon,
              {tintColor: props.RequestList ? Colors.blue_txt : '#333'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => {
            navigation.navigate('UserProfile');
          }}>
          <Image
            source={require('../assets/images/User.png')}
            resizeMode="contain"
            style={[
              styles.icon,
              {tintColor: props.user ? Colors.blue_txt : '#333'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <Image
            source={require('../assets/images/Notification.png')}
            resizeMode="contain"
            style={[
              styles.icon,
              {tintColor: props.notification ? Colors.blue_txt : '#333'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => {
            navigation.navigate('Watch');
          }}>
          <Image
            source={require('../assets/images/Videoicon.png')}
            resizeMode="contain"
            style={[
              styles.icon,
              {tintColor: props.watch ? Colors.blue_txt : '#333'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inner}>
          <Image
            source={require('../assets/images/Menu.png')}
            resizeMode="contain"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: Colors.border,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 27,
    width: 27,
  },
});
export default Menu;
