import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import TextBox from '../Register/TextBox';
import hide from '../../assets/images/Eye.png';
import show from '../../assets/images/Eye-closed.png';
import {myStyles} from '../../Common/styles';
import {hitLoginUser} from '../../config/api';
import {setItem} from '../../utils/utils';
import {debugLog} from '../../Common/common';
import Loader from '../../components/Loader';
import {heightPixel} from '../../config/Normalize';
const Login = ({navigation}) => {
  const [credential, setcredentail] = useState('');
  const [password, setpassword] = useState('');
  const [loader, setloader] = useState(false);
  const login_user = () => {
    if (credential == '' && password == '') {
      Alert.alert('All Field Required');
      return;
    }
    const param = {
      logincredentail: credential.replace(/\s/g, '').toLocaleLowerCase(),
      password: password,
      status: 0,
    };
    setloader(true);
    hitLoginUser(param)
      .then(res => {
        if (res.status == 1) {
          setItem('user_id', res.user_id);
          navigation.navigate('Home');
          setloader(false);
          return;
        } else {
          Alert.alert(res.message);
          setloader(false);
          return;
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.header}>
              <ImageBackground
                source={require('../../assets/images/Background.png')}
                style={{
                  height: heightPixel(470),
                  width: '100%',
                }}
                resizeMode="stretch">
                <>
                  <View>
                    <Image
                      source={require('../../assets/images/Icons.png')}
                      style={{left: '5%', top: '1%'}}
                    />
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'relative',
                    }}>
                    <View style={myStyles.col_center}>
                      <Image
                        source={require('../../assets/images/Logo.png')}
                        style={{left: '0%', top: '-10%'}}
                      />
                    </View>
                  </View>
                </>
              </ImageBackground>
            </View>
            <View
              style={[
                styles.header,
                {marginHorizontal: 16, marginVertical: 5},
              ]}>
              <TextBox
                label="Phone or Email"
                value={credential}
                onChangeText={text => {
                  setcredentail(text);
                }}
              />
            </View>
            <View
              style={[
                styles.header,
                {marginHorizontal: 16, marginVertical: 5},
              ]}>
              <TextBox
                label="Password"
                value={password}
                onChangeText={text => {
                  setpassword(text);
                }}
                isPassword={true}
                hide={hide}
                show={show}
              />
            </View>
            <View
              style={[
                styles.header,
                {marginHorizontal: 16, marginVertical: '5%'},
              ]}>
              <Button text="Log In" onPress={login_user} />
            </View>
            <View
              style={[
                styles.header,
                {alignItems: 'center', marginVertical: 15},
              ]}>
              <Text
                style={styles.fp}
                onPress={() => {
                  navigation.navigate('Find');
                }}>
                {' Forgot Password?'}
              </Text>
            </View>
            <View
              style={[
                styles.header,
                {marginVertical: 10, alignItems: 'center'},
              ]}>
              <Text style={{fontSize: 20}}>{'OR'}</Text>
            </View>
            <View style={[styles.header, {marginHorizontal: '15%'}]}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <Text style={styles.btntext}>{'Create New Account'}</Text>
              </TouchableOpacity>
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
  button: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  btntext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  fp: {
    fontSize: 16,
    fontWeight: '600',
    color: 'blue',
  },
});
export default Login;
