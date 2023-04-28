import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import OuterHeader from '../../components/OuterHeader';
import Header from './Header';
import TextBox from './TextBox';
import {debugLog} from '../../Common/common';
import {hitSendOtpApi} from '../../config/api';
import {myStyles} from '../../Common/styles';
import Loader from '../../components/Loader';
const Mobile = ({route, navigation}) => {
  const [email, setemail] = useState('');
  const [loader, setloader] = useState(false);
  const {name, lastname, gender, dob, username} = route.params;
  const Send_Otp = () => {
    const params = {
      text: email.toLocaleLowerCase(),
      status: 0,
    };
    setloader(true);
    hitSendOtpApi(params)
      .then(res => {
        debugLog(res);
        if (res.status == 1) {
          navigation.navigate('OTP', {
            name: name,
            lastname: lastname,
            dob: dob,
            gender: gender,
            email: email,
            username: username,
            otp: res.otp,
          });
          setloader(false);
        } else {
          setloader(false);
        }
      })
      .catch(err => {
        setloader(false);
        debugLog(err);
      });
  };

  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <Loader loader={loader} />
        <OuterHeader header="Email" />
        <ScrollView>
          <View style={styles.header}>
            <Header
              heading={'Enter your Email address'}
              para={'Enter the Email address where you can reached.'}
            />
          </View>
          <View style={[styles.header, {marginHorizontal: 16}]}>
            <TextBox
              label={'Email address'}
              value={email}
              onChangeText={e => {
                setemail(e);
              }}
            />
          </View>
          <View style={{marginHorizontal: 16, marginVertical: '15%'}}>
            <Button disabled={email == ''} text="Next" onPress={Send_Otp} />
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
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
    fontWeight: '700',
    marginVertical: '10%',
  },
});
export default Mobile;
