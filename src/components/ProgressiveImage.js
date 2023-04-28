import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {Blurhash} from 'react-native-blurhash';
const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#1c1c1e',
  },
});

class ProgressiveImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {load: false};
  }
  thumbnailAnimated = new Animated.Value(0);

  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
    }).start();
    this.setState({load: true});
  };

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
    }).start();
    this.setState({load: true});
  };

  render() {
    const {thumbnailSource, source, style, ...props} = this.props;
    return (
      <View style={styles.container}>
        {/* <Blurhash /> */}
        {!this.state.load && (
          <Blurhash style={style} blurhash={'LGFFaXYk^6#M@-5c,1J5@[or[Q6.'} />
        )}
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={[style, {opacity: this.thumbnailAnimated}]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={1}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, {opacity: this.imageAnimated}, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
