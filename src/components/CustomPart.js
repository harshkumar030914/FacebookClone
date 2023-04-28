import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Colors from '../Common/Colors';
import {myStyles} from '../Common/styles';
const CustomPart = ({text, onSearch}) => {
  return (
    <>
      <View style={myStyles.row2}>
        <View style={[myStyles.coulmn, myStyles.hr_center]}>
          <Text style={myStyles.txt_h1}>{text}</Text>
        </View>
        <View style={myStyles.coulmn2}>
          <TouchableOpacity onPress={onSearch} style={myStyles.icon_back}>
            <View style={[myStyles.coulmn, myStyles.center]}>
              <Image
                source={require('../assets/images/Icon.png')}
                resizeMode="contain"
                style={{height: 20, width: 20, tintColor: Colors.black}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default CustomPart;
