import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView, Alert} from 'react-native';
import Button from '../../components/Button';
import OuterHeader from '../../components/OuterHeader';
import Header from './Header';
import TextBox from './TextBox';
import {debugLog} from '../../Common/common';
import {hitRegisterUser} from '../../config/api';
import {useDispatch} from 'react-redux';
import {Insert_UserDetails} from '../../redux/action';
import {myStyles} from '../../Common/styles';
import Loader from '../../components/Loader';
const Password = ({navigation, route}) => {
  const [pass, setpass] = useState('');
  const [loader, setloader] = useState(false);
  const {email, firstname, lastname, dob, gender, username} = route.params;
  const dispatch = useDispatch();
  const register_user = () => {
    const param = {
      personal_info: {
        username: username,
        firstname: firstname,
        lastname: lastname,
        birthdate: dob,
        gender: gender,
        mobile: 0,
        email: email,
        relationship: '',
        country: 'India',
      },
      user_info: {
        password: pass,
        profilePicture: '',
        coverPicture: '',
        about: '',
        friends: [],
      },
      user_education: {
        worksAt: '',
        studyAt: '',
      },
    };
    if (pass.length != 6) {
      Alert.alert('Password Must be 6 character long');
      return false;
    }
    setloader(true);
    hitRegisterUser(param)
      .then(res => {
        if (res.status == 1) {
          dispatch(Insert_UserDetails(res.result));
          navigation.navigate('Terms');
          setloader(false);
          return;
        } else {
          setloader(false);
          return;
        }
      })
      .catch(err => {
        debugLog(err);
        setloader(false);
        return;
      });
  };
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <Loader loader={loader} />
        <OuterHeader header="Password" />
        <ScrollView>
          <Header
            heading={'Choose a password'}
            para={
              'Create a password at least with 6 chaeacters.\nIt should be something others couldn’t guess.'
            }
          />
          <View style={styles.container}>
            <View style={styles.part}>
              <TextBox
                label={'Password'}
                value={pass}
                onChangeText={e => {
                  setpass(e);
                }}
                isPassword={true}
              />
            </View>
          </View>
          <View style={styles.container2}>
            <Button text="Next" onPress={register_user} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '5%',
  },
  part: {
    flex: 1,
    marginHorizontal: 15,
  },
  container2: {
    marginVertical: '30%',
    marginHorizontal: 16,
  },
});
export default Password;
