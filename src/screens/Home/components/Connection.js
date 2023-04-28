import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import Font from '../../../Common/Font';
const Connection = () => {
  return (
    <>
      <View style={[style.header, {marginVertical: 3}]}>
        <View style={style.part}>
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              backgroundColor: 'rgba(249, 197, 15, 0.1)',
              borderRadius: 10,
              height: 30,
            }}>
            <View style={style.part}>
              <View style={style.header}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../../assets/images/reels.png')}
                    resizeMode="contain"
                    style={{
                      height: 19,
                      width: 21,
                      tintColor: '#F9C50F',
                      marginVertical: 2,
                      marginHorizontal: 5,
                    }}
                  />
                </View>
                <View style={style.part}>
                  <Text
                    style={{
                      color: '#F9C50F',
                      fontSize: 12,
                      fontFamily: Font.txt_medium,
                      textAlign: 'center',
                    }}>
                    {'Reels'}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.part}>
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              backgroundColor: 'rgba(68, 192, 65, 0.1)',
              borderRadius: 10,
              height: 30,
            }}>
            <View style={style.part}>
              <View style={style.header}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../../assets/images/2.png')}
                    resizeMode="contain"
                    style={{
                      height: 18,
                      width: 20,
                      marginVertical: 2,
                      marginHorizontal: 5,
                    }}
                  />
                </View>
                <View style={style.part}>
                  <Text style={[style.text, {color: '#44C041'}]}>{'Room'}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.part}>
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              backgroundColor: 'rgba(248, 89, 0, 0.1)',
              borderRadius: 10,
              height: 30,
            }}>
            <View style={style.part}>
              <View style={style.header}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../../assets/images/groups.png')}
                    resizeMode="contain"
                    style={{
                      height: 18,
                      width: 21,
                      marginVertical: 2,
                      marginHorizontal: 5,
                    }}
                  />
                </View>
                <View style={style.part}>
                  <Text style={[style.text, {color: '#FC6565'}]}>
                    {'Group'}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.part}>
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              backgroundColor: 'rgba(72, 107, 229, 0.1)',
              borderRadius: 10,
              height: 30,
            }}>
            <View style={style.part}>
              <View style={style.header}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../../assets/images/live.png')}
                    resizeMode="contain"
                    style={{
                      height: 19,
                      width: 21,
                      marginVertical: 2,
                      marginHorizontal: 5,
                    }}
                  />
                </View>
                <View style={style.part}>
                  <Text style={[style.text, {color: '#486BE5'}]}>{'Live'}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  part: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: Font.txt_medium,
    textAlign: 'center',
  },
});
export default Connection;
