import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';
import Button from '../../components/Button';
import OuterHeader from '../../components/OuterHeader';
import Font from '../../Common/Font';
const Join = () => {
  const navigate = useNavigation();
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <OuterHeader header="Create account" />
        <View style={styles.inner}>
          <View style={[styles.inner, {alignItems: 'center'}]}>
            <Image
              source={require('../../../src/assets/images/Illustration.png')}
              resizeMode="contain"
              style={{height: 218, width: 318}}
            />
          </View>
          <View style={styles.inner}>
            <Text style={styles.heading}>Join facebook</Text>
            <Text style={styles.para}>
              We will help you {'\n'} to create a new account in a few step
            </Text>
          </View>
          <View style={[styles.inner, {marginHorizontal: 19}]}>
            <Button
              text="Next"
              onPress={() => {
                navigate.navigate('Username');
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 21,
    color: '#333',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: Font.txt_medium,
  },
  para: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
    fontFamily: Font.txt_normal,
  },
});

export default Join;
