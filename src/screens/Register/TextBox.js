import React from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Colors from '../../Common/Colors';
import Font from '../../Common/Font';
const TextBox = props => {
  return (
    <>
      <FloatingLabelInput
        label={props.label}
        value={props.value}
        containerStyles={{
          borderBottomWidth: 1.2,
          backgroundColor: '#fff',
          borderColor: 'gray',
        }}
        customLabelStyles={{
          fontSizeFocused: 12,
          fontFamily: Font.txt_medium,
          fontWeight: '700',
        }}
        labelStyles={{
          backgroundColor: '#fff',
          paddingHorizontal: 5,
          fontFamily: Font.txt_normal,
          fontWeight: '600',
          color: 'red',
        }}
        inputStyles={{
          color: '#000000',
          paddingHorizontal: 10,
          marginTop: 6,
          fontSize: 14,
          fontFamily: Font.txt_normal,
          fontWeight: '600',
        }}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        isPassword={props.isPassword}
        customShowPasswordImage={props.show}
        customHidePasswordImage={props.hide}
      />
    </>
  );
};
export default TextBox;
