import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import Box from './BoxOne';
import LoginBox from './LoginBox';
import {myStyles} from '../../Common/styles';
const ProfileLogin = () => {
  const navigation = useNavigation();
  const create_account = () => {
    navigation.navigate('Register');
  };
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <ScrollView>
          <View style={styles.body}>
            <Image
              source={require('../../assets/images/Logo.png')}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
          <View style={styles.margin_30}>
            <LoginBox />
          </View>
          <View style={styles.margin_30}>
            <Box
              source={require('../../assets/images/Plus.png')}
              text={'Log in to your account'}
            />
            <Box
              style={{height: 20}}
              source={require('../../assets/images/Search.png')}
              text={'Find your account'}
            />
          </View>
        </ScrollView>
        <View style={styles.inner}>
          <Button text="Create New Facebook Account" onPress={create_account} />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 70,
    marginTop: '40%',
    marginBottom: '10%',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin_30: {
    marginHorizontal: 30,
  },
});
export default ProfileLogin;
