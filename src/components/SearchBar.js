import React from 'react';
import {
  Image,
  TextInput,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from 'react-native';
import {myStyles} from '../Common/styles';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Common/Colors';
import Font from '../Common/Font';
import {debugLog} from '../Common/common';
const SearchBar = ({onChange, value, onClear}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableHighlight style={myStyles.searchbarheader}>
        <View style={myStyles.row}>
          <View style={myStyles.center}>
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
          <View style={myStyles.col_center}>
            <View style={myStyles.searchbarwrapper}>
              <View style={myStyles.row}>
                <View style={myStyles.row}>
                  <TextInput
                    style={{
                      height: 40,
                      fontSize: 12,
                      width: '100%',
                      fontFamily: Font.txt_normal,
                      color: Colors.placeholder_txt,
                    }}
                    value={value}
                    placeholder="Search here..."
                    placeholderTextColor={Colors.placeholder_txt}
                    onChangeText={onChange}
                  />
                </View>
                <View style={myStyles.center}>
                  <TouchableHighlight onPress={onClear} underlayColor={'none'}>
                    <Image
                      source={
                        value.length > !0
                          ? require('../../src/assets/images/Union.png')
                          : require('../../src/assets/images/Icon.png')
                      }
                      resizeMode="contain"
                      style={{
                        height: value.length > !0 ? 10 : 20,
                        width: 20,
                        marginHorizontal: 5,
                        tintColor: Colors.gray,
                      }}
                    />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
};
export default SearchBar;
