import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../config/Normalize';
import Colors from '../../Common/Colors';
export const styles = StyleSheet.create({
  header: {
    height: heightPixel(60),
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: Colors.border,
  },
  back: {
    height: heightPixel(22),
    width: widthPixel(20),
    resizeMode: 'contain',
    marginHorizontal: 7,
  },
  user_icon: {
    height: heightPixel(48),
    width: widthPixel(40),
    borderRadius: 7,
    marginHorizontal: 10,
  },
  msg_user_name: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
  },
  msg_header_sub: {
    fontSize: 11,
    color: '#000000',
  },
  msh_mainHeader_wrapper: {
    width: widthPixel(275),
  },
  pic: {
    height: heightPixel(80),
    width: widthPixel(80),
    borderRadius: 10,
  },
  pic1: {
    height: heightPixel(40),
    width: widthPixel(40),
    position: 'absolute',
    left: 30,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.white,
    top: 0,
  },
  pic2: {
    height: heightPixel(42),
    width: widthPixel(38),
    position: 'absolute',
    borderRadius: 7,
    bottom: 17,
  },
});
