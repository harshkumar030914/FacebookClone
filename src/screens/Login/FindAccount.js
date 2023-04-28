import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView, Text} from 'react-native';
import Button from '../../components/Button';
import OuterHeader from '../../components/OuterHeader';
import Header from '../Register/Header';
import TextBox from '../Register/TextBox';
const FindAccount = ({navigation}) => {
  const [number, setnumber] = useState('');
  const [email, setemail] = useState('');
  const [toggle, settoggle] = useState(true);
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <OuterHeader header="Find Your Account" />
        <ScrollView>
          <View style={styles.header}>
            <Header
              heading={
                toggle ? 'Enter your email address' : 'Enter your mobile number'
              }
            />
          </View>
          <View style={[styles.header, {marginHorizontal: 16}]}>
            {toggle ? (
              <TextBox
                label={'Email Address'}
                value={email}
                onChangeText={e => {
                  setemail(e);
                }}
              />
            ) : (
              <TextBox
                label={'Mobile Number'}
                value={number}
                onChangeText={e => {
                  setnumber(e);
                }}
                keyboardType={'number-pad'}
              />
            )}
          </View>
          <View style={{marginHorizontal: 16, marginVertical: '15%'}}>
            <Button
              text="Find Your Account"
              onPress={() => {
                navigation.navigate('OTP', {
                  otp: 345,
                  email: 'harsh@gmail.com',
                });
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.header}>
          <Text
            style={styles.text}
            onPress={() => {
              toggle ? settoggle(false) : settoggle(true);
            }}>
            {toggle
              ? 'Search by Mobile Number Instead'
              : 'Search by Email Instead'}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'blue',
  },
});
export default FindAccount;
