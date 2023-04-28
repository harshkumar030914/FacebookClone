import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import Colors from '../../../Common/Colors';
import {Cover_image, Post_profile} from '../../../Common/constant';
import {myStyles} from '../../../Common/styles';
import camera from '../../../assets/images/camera.png';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
const CoverHeader = ({loading, onCover, onProfile}) => {
  return (
    <>
      <View style={myStyles.container}>
        <View style={styles.cover_height}>
          <View style={myStyles.coulmn}>
            <SkeletonContent
              containerStyle={{flex: 1}}
              isLoading={loading}
              animationType={'shiver'}
              layout={[{key: '1', width: '100%', height: 240}]}>
              <ImageBackground
                source={{uri: Cover_image}}
                style={styles.back_img}>
                <View style={styles.box}>
                  <View style={styles.profile_img}>
                    <View style={myStyles.row}>
                      <View style={myStyles.flex_center}>
                        <Image
                          source={{uri: Post_profile}}
                          style={styles.image}
                        />
                        <View style={styles.prof_cam}>
                          <View style={styles.inner_prof_cam}>
                            <TouchableHighlight
                              underlayColor={'none'}
                              onPress={onProfile}
                              style={[styles.camera, {height: 25, width: 25}]}>
                              <Image
                                source={camera}
                                resizeMode={'contain'}
                                style={styles.cam}
                              />
                            </TouchableHighlight>
                          </View>
                        </View>
                      </View>
                      <View style={styles.cover_cam}>
                        <TouchableHighlight
                          style={styles.camera}
                          underlayColor={'none'}
                          onPress={onCover}>
                          <Image
                            source={camera}
                            resizeMode={'contain'}
                            style={styles.cam}
                          />
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </SkeletonContent>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  cover_height: {
    height: 240,
    width: '100%',
  },
  back_img: {
    height: '100%',
    width: null,
    resizeMode: 'contain',
  },
  box: {
    position: 'relative',
    height: '100%',
  },
  profile_img: {
    position: 'absolute',
    width: '100%',
    top: '40%',
  },
  image: {
    height: 170,
    width: 170,
    borderWidth: 6,
    borderRadius: 27,
    borderColor: Colors.white,
  },
  camera: {
    height: 30,
    width: 30,
    opacity: 0.7,
    borderRadius: 7,
    backgroundColor: Colors.gray3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  cam: {
    height: 20,
    width: 20,
  },
  cover_cam: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  prof_cam: {
    position: 'absolute',
    width: 150,
    bottom: 20,
  },
  inner_prof_cam: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
});
export default CoverHeader;
