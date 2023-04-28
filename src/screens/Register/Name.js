import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import Button from '../../components/Button';
import OuterHeader from '../../components/OuterHeader';
import Header from './Header';
import TextBox from './TextBox';
const Name = ({route}) => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [lastname, setlastname] = useState('');
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <OuterHeader header="Create account" />
        <ScrollView>
          <Header
            heading={"What's your Name"}
            para={'Enter your name you use in real life'}
          />
          <View style={styles.container}>
            <View style={styles.part}>
              <TextBox
                label={'First Name'}
                value={name}
                onChangeText={e => {
                  setname(e);
                }}
              />
            </View>
            <View style={styles.part}>
              <TextBox
                label={'Last Name'}
                value={lastname}
                onChangeText={e => {
                  setlastname(e);
                }}
              />
            </View>
          </View>
          <View style={styles.container2}>
            <Button
              disabled={name == '' && lastname == ''}
              text="Next"
              onPress={() => {
                navigation.navigate('Birthday', {
                  f_name: name,
                  l_name: lastname,
                  username: route.params.username,
                });
              }}
            />
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
export default Name;
