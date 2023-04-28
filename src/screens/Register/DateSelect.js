import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Button from '../../components/Button';
import OuterHeader from '../../components/OuterHeader';
import Header from './Header';
import Colors from '../../Common/Colors';
import {myStyles} from '../../Common/styles';
import {get_dob} from '../../Common/common';
const DateSelect = ({route, navigation}) => {
  const {l_name, f_name, username} = route.params;
  const [date, setDate] = useState(new Date('1999-01-01'));
  return (
    <>
      <SafeAreaView style={myStyles.background}>
        <OuterHeader header="Birthday" />
        <ScrollView>
          <View style={styles.header}>
            <Header
              heading={"When's your Birthday"}
              para={'Choose Your date of birth'}
            />
          </View>
          <View style={styles.header}>
            <DatePicker
              mode="date"
              date={date}
              onDateChange={setDate}
              maximumDate={new Date()}
              minimumDate={new Date('1950-01-01')}
              textColor={Colors.splash_text}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.text}>
              {get_dob(date)} {'years Old'}
            </Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Button
              text="Next"
              onPress={() => {
                navigation.navigate('Gender', {
                  name: f_name,
                  lastname: l_name,
                  dob: date,
                  username: username,
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
export default DateSelect;
