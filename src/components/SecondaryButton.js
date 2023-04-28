import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Colors from '../Common/Colors';
import {myStyles} from '../Common/styles';
const SecondaryButton = props => {
  return (
    <>
      <TouchableOpacity style={styles.btn}>
        <Text style={[myStyles.buttonText, {color: Colors.secondary_txt}]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary_btn,
    paddingLeft: 15,
    elevation: 1,
    paddingRight: 15,
  },
});
export default SecondaryButton;
