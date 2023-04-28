import React from 'react';
import {ActivityIndicator, StyleSheet, Text, Modal, View} from 'react-native';
import Colors from '../Common/Colors';
import Font from '../Common/Font';
const Loader = ({loader}) => {
  return (
    <>
      {/*Loader Screen*/}
      <Modal animationType="slide" transparent={true} visible={loader}>
        <View style={[myStyle.jf_center, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
          <View style={myStyle.modalView}>
            <View style={myStyle.row_cen}>
              <View style={[myStyle.justify_center, {marginHorizontal: 16}]}>
                <ActivityIndicator color={Colors.blue} size={'large'} />
              </View>
              <View style={myStyle.jf_center}>
                <Text
                  style={[
                    {
                      fontSize: 14,
                      color: Colors.drop_txt,
                      fontFamily: Font.txt_medium,
                    },
                  ]}>
                  {'Please wait...'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/*Loader Screen Ends*/}
    </>
  );
};
const myStyle = StyleSheet.create({
  modalView: {
    height: 70,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text_color,
  },
  jf_center: {
    flex: 1,
    justifyContent: 'center',
  },
  row_cen: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default Loader;
