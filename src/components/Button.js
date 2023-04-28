import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {myStyles} from '../Common/styles';
import {TouchableRipple} from 'react-native-paper';
const Button = props => {
  return (
    <>
      <TouchableRipple disabled={props.disabled} onPress={props.onPress}>
        <LinearGradient
          colors={['#384CFF', '#00A3FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[
            styles.linearGradient,
            props.styles,
            {
              borderRadius: !props.radius ? 25 : 5,
              height: !props.radius ? 45 : null,
            },
          ]}>
          <Text style={myStyles.buttonText}>{props.text}</Text>
        </LinearGradient>
      </TouchableRipple>
    </>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(28, 120, 255, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 9,
    elevation: 6,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default Button;
