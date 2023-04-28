import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {heightPixel, widthPixel} from '../config/Normalize';
import Font from '../Common/Font';
const OuterHeader = props => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          height: heightPixel(50),
          borderBottomWidth: 1,
          borderBottomColor: 'silver',
        }}>
        <View style={style.main}>
          <View style={style.part1}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack('');
              }}>
              <Image
                source={require('../../src/assets/images/Left.png')}
                resizeMode="contain"
                style={{
                  height: 14,
                  width: 14,
                  tintColor: 'black',
                  marginHorizontal: 16,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={style.part2}>
            <Text style={style.text}>{props.header}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  part1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  part2: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontFamily: Font.txt_medium,
  },
});
export default OuterHeader;
