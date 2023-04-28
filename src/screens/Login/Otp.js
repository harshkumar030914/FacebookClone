import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
} from 'react-native';
import Button from '../../components/Button';
import OuterHeader from '../../components/OuterHeader';
import Header from '../Register/Header';
import {myStyles} from '../../Common/styles';
import { debugLog } from '../../Common/common';
const Otp = ({route, navigation}) => {
  const {email, name, lastname, dob, gender, otp, username} = route.params;
  const [userotp, setuserotp] = useState('');
  useEffect(() => {
    if (userotp.length == 6) {
      if (userotp == otp) {
        navigation.navigate('Password', {
          username: username,
          firstname: name,
          lastname: lastname,
          birthdate: dob,
          gender: gender,
          mobile: 0,
          email: email,
        });
      }
    }
  });

  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.header}>
              <OuterHeader header="Find Your Account" />
            </View>
            <View style={styles.header}>
              <Header
                heading={'Enter the code we sent to \n' + email + ''}
                para={'We sent 6 digit code to your Email address'}
              />
            </View>
            <View style={[styles.header, {marginHorizontal: 16}]}>
              <TextInput
                style={styles.otpbox}
                maxLength={6}
                keyboardType={'number-pad'}
                value={userotp}
                onChangeText={e => {
                  setuserotp(e);
                }}
              />
            </View>
            <View
              style={[
                styles.header,
                {marginHorizontal: 16, marginVertical: '5%'},
              ]}>
              <Button
                text="Continue"
                onPress={() => {
                  navigation.navigate('Reset');
                }}
              />
            </View>
            <View style={styles.header}>
              <View style={styles.row}>
                <View>
                  <Image
                    source={require('../../assets/images/email.png')}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.header}>
                  <Text style={styles.send}>Send Email Again</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  otpbox: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#384CFF',
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    marginVertical: '5%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  send: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    paddingHorizontal: 10,
  },
});
export default Otp;
