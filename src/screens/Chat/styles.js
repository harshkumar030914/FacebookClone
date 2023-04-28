import {StyleSheet} from 'react-native';
import Colors from '../../Common/Colors';
export const styles = StyleSheet.create({
  search_header: {
    height: 40,
    backgroundColor: 'rgba(238, 238, 238, 0.8)',
    width: '100%',
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  icon: {
    height: 14,
    width: 14,
    marginHorizontal: 10,
  },
  txt: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.secondary_txt,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  active_container: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: Colors.secondary_btn,
  },
  name: {
    fontSize: 10,
    fontWeight: '400',
    color: Colors.black,
    textAlign: 'center',
  },
  active_dot: {
    position: 'absolute',
    borderWidth: 1,
    height: 15,
    width: 15,
    borderRadius: 15,
    backgroundColor: Colors.green,
    borderColor: Colors.white,
    bottom: 0,
    right: -5,
  },
  box: {
    height: 80,
    width: '100%',
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.blue_txt,
  },
  user_name: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
  ago: {
    fontSize: 11,
    fontWeight: '400',
    color: Colors.secondary_txt,
  },
});
