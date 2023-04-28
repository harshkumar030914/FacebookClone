import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {Blurhash} from 'react-native-blurhash';
import { debugLog } from './src/Common/common';
import ProgressiveImage from './src/components/ProgressiveImage';

const BlurHashImage = ({uri, blurHash}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    // debugLog(lklkl)
    setImageLoaded(true);
  };
  const w = Dimensions.get('window');
  
  return (
    <View style={styles.container}>
      {/* {!isImageLoaded && blurHash && (
        <Blurhash style={styles.image} blurhash={blurHash} />
      )} */}
      {/* <Image
        source={{uri}}
        onLoad={handleImageLoad}
        style={[styles.image, !isImageLoaded && styles.hidden]}
      /> */}
        <ProgressiveImage
          thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
          source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${w.width * 2}&buster=${Math.random()}` }}
          style={{ width: w.width, height: w.width }}
          resizeMode="cover"
        />
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 400,
    height: 400,
  },
  hidden: {
    display: 'none',
  },
});

export default BlurHashImage;
