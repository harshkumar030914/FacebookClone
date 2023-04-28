import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../Common/Colors';
import {heightPixel, widthPixel} from '../../../config/Normalize';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {myStyles} from '../../../Common/styles';
import Font from '../../../Common/Font';
const Story = props => {
  const navigation = useNavigation();
  return (
    <>
      <SkeletonContent
        containerStyle={myStyles.coulmn}
        isLoading={false}
        animationType={'shiver'}
        boneColor="#E1E9EE"
        layout={[
          {
            key: 'someId',
            width: widthPixel(115),
            height: heightPixel(180),
            borderRadius: 10,
            marginVertical: heightPixel(10),
          },
        ]}>
        <View style={{marginBottom: 10}}>
          <TouchableHighlight
            underlayColor={'none'}
            style={{marginHorizontal: 5, marginVertical: 5}}
            onPress={() => {
              navigation.navigate('storyscreen', {
                uri: props.uri,
              });
            }}>
            <View style={{position: 'relative'}}>
              <Image source={{uri: props.uri}} style={styles.story_pic} />
              <TouchableHighlight
                style={{position: 'absolute', bottom: -10, left: 0, right: 0}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LinearGradient
                    colors={['#384CFF', '#00A3FF']}
                    style={{
                      height: 27,
                      width: 27,
                      borderRadius: 27,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: props.uri}}
                      style={{
                        height: 25,
                        width: 25,
                        borderWidth: 1,
                        borderRadius: 25,
                      }}
                    />
                  </LinearGradient>
                </View>
              </TouchableHighlight>
            </View>
          </TouchableHighlight>
          <View style={myStyles.col_center}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                color: Colors.black,
                fontFamily: Font.txt_medium,
                marginTop: 5,
              }}>
              {props.user_name}
            </Text>
          </View>
        </View>
      </SkeletonContent>
    </>
  );
};
const styles = StyleSheet.create({
  story_pic: {
    height: heightPixel(180),
    width: widthPixel(115),
    borderRadius: 15,
  },
});
export default Story;
