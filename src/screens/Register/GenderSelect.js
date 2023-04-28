import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import OuterHeader from '../../components/OuterHeader';
import Header from './Header';
import Button from '../../components/Button';
import Colors from '../../Common/Colors';
import Font from '../../Common/Font';
import {GenderData} from '../../Common/constant';
import {Checkbox} from 'react-native-paper';
import {myStyles} from '../../Common/styles';
const GenderSelect = ({route, navigation}) => {
  const [g_id, setg_id] = useState(0);
  const renderItem = ({item}) => {
    const _handle_gender = () => {
      setg_id(item.id);
    };
    return (
      <SelectBox
        text={item.text}
        checked={item.id == g_id}
        onPress={_handle_gender}
      />
    );
  };
  const keyExtractor = item => item.id.toString();
  const ListHeaderComponent = () => {
    return (
      <>
        <OuterHeader header="Gender" />
        <View>
          <View
            style={[myStyles.coulmn, {marginTop: '2%', marginBottom: '5%'}]}>
            <Header
              heading="What's your gender"
              para="You can change who see your gender later on porofile"
            />
          </View>
        </View>
      </>
    );
  };
  const {name, lastname, username, dob} = route.params;
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
          data={GenderData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        <View style={styles.footer}>
          <Button
            text="Next"
            onPress={() => {
              navigation.navigate('Mobile', {
                name: name,
                lastname: lastname,
                dob: dob,
                username: username,
                gender: g_id,
              });
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
const SelectBox = props => {
  return (
    <>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={[{alignItems: 'flex-end'}]}>
          <Checkbox
            status={props.checked ? 'checked' : 'unchecked'}
            onPress={props.onPress}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderBottomWidth: 1,
    marginVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    fontFamily: Font.txt_medium,
  },
  footer: {
    marginHorizontal: 16,
    marginVertical: '10%',
  },
});
export default GenderSelect;
