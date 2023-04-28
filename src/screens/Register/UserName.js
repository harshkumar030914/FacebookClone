import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Alert,
} from 'react-native';
import Button from '../../components/Button';
import OuterHeader from '../../components/OuterHeader';
import Header from './Header';
import TextBox from './TextBox';
import {myStyles} from '../../Common/styles';
import {hitCheckUsername} from '../../config/api';
import {debugLog} from '../../Common/common';
import Loader from '../../components/Loader';
const UserName = () => {
  const navigation = useNavigation();
  const [username, setusername] = useState('');
  const [loader, setloader] = useState(false);
  const UserNameAvail = () => {
    const param = {
      username: username.toLocaleLowerCase(),
    };
    setloader(true);
    hitCheckUsername(param)
      .then(res => {
        if (res.status == 1) {
          setloader(false);
          navigation.navigate('Name', {
            username: username,
          });
          return;
        } else {
          Alert.alert(res.message);
          return;
        }
      })
      .catch(err => {
        debugLog(err);
      });
  };
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <OuterHeader header="Create account" />
        <ScrollView>
          <Header
            heading={'Enter Username'}
            para={
              'Your username is your unique identity on our app\nallowing you to stand out and connect with others in a memorable way.'
            }
          />
          <View style={styles.container}>
            <View style={styles.part}>
              <TextBox
                label={'User Name'}
                value={username}
                onChangeText={e => {
                  setusername(e);
                }}
              />
            </View>
          </View>
          <View style={styles.container2}>
            <Button
              disabled={username == ''}
              text="Next"
              onPress={UserNameAvail}
            />
          </View>
          <Loader loader={loader} />
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
export default UserName;
