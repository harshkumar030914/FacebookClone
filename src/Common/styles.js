import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Font from './Font';
import {heightPixel} from '../config/Normalize';
export const myStyles = StyleSheet.create({
  coulmn: {
    flex: 1,
  },
  coulmn2: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  row2: {
    flexDirection: 'row',
  },
  post_user: {
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  hr_center: {
    justifyContent: 'center',
  },
  vr_center: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  col_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding_10: {
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  flex_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  post_icon: {
    height: 18,
    width: 21,
    marginRight: 15,
  },
  icon_back: {
    height: 35,
    width: 35,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgba(238, 238, 238, 0.5)',
  },
  txt_h1: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.black,
    paddingLeft: 5,
    fontFamily: Font.txt_medium,
  },
  margin_10: {
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    paddingVertical: 6.5,
    fontFamily: Font.txt_medium,
  },
  mv_10: {
    marginVertical: 10,
  },
  seperator: {
    borderBottomWidth: 0.5,
    borderColor: Colors.border,
    marginTop: 9,
  },
  searchbarheader: {
    height: 50,
    marginVertical: heightPixel(10),
  },
  searchbarwrapper: {
    height: 40,
    width: '100%',
    borderRadius: 25,
    backgroundColor: Colors.gray2,
    elevation: 2,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});
