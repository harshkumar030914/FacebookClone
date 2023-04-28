import React from 'react';
import Splash from './src/screens/splash';
import ProfileLogin from './src/screens/ProfileLogin';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Terms from './src/screens/Register/TermsPrivacy';
import Mobile from './src/screens/Register/Mobile';
import GenderSelect from './src/screens/Register/GenderSelect';
import DateSelect from './src/screens/Register/DateSelect';
import Password from './src/screens/Register/Password';
import Name from './src/screens/Register/Name';
import Login from './src/screens/Login';
import FindAccount from './src/screens/Login/FindAccount';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Otp from './src/screens/Login/Otp';
import ResetPassword from './src/screens/Login/ResetPassword';
import StoryScreen from './src/screens/Home/page/StoryScreen';
import FriendRequest from './src/screens/FriendRequest';
import UserProfile from './src/screens/UserProfile';
import Notification from './src/screens/Notification';
import Watch from './src/screens/Watch';
import Chat from './src/screens/Chat';
import Messaging from './src/screens/Messaging';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import UserName from './src/screens/Register/UserName';
import SearchUser from './src/screens/SearchUser';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Onboard" component={ProfileLogin} />
            <Stack.Screen name="FriendRequest" component={FriendRequest} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Username" component={UserName} />
            <Stack.Screen name="Name" component={Name} />
            <Stack.Screen name="Birthday" component={DateSelect} />
            <Stack.Screen name="Gender" component={GenderSelect} />
            <Stack.Screen name="Searchuser" component={SearchUser} />
            <Stack.Screen name="Mobile" component={Mobile} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="Find" component={FindAccount} />
            <Stack.Screen name="OTP" component={Otp} />
            <Stack.Screen name="Reset" component={ResetPassword} />
            <Stack.Screen name="storyscreen" component={StoryScreen} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Watch" component={Watch} />
            <Stack.Screen name="Messaging" component={Messaging} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
// /* eslint-disable react-native/no-inline-styles */
// import React, {useCallback, useEffect, useMemo, useState} from 'react';
// import {Image, Text} from 'react-native';
// import {TouchableOpacity} from 'react-native';
// import {ScrollView} from 'react-native';
// import {View} from 'react-native';
// import {Dimensions} from 'react-native';
// import {StatusBar} from 'react-native';
// import {SafeAreaView} from 'react-native';

// import {StyleSheet} from 'react-native';
// // import ImageGrid from '@baronha/react-native-image-grid';
// import {debugLog} from './src/Common/common';
// import ImagePicker from 'react-native-image-crop-picker';
// import {Blurhash} from 'react-native-blurhash';
// import BlurHashImage from './BlurHashImage';
// const {width} = Dimensions.get('window');

// export default function App() {
//   const [images, setImages] = useState();

//   const onPressImage = (item, index) => {
//     console.log(item, index);
//   };

//   const onPicker = async () => {
//     try {
//       const singleSelectedMode = true;
//       let defaultOptions = {
//         //**iOS**//
//         usedPrefetch: false,
//         allowedAlbumCloudShared: false,
//         muteAudio: true,
//         autoPlay: true,
//         //resize thumbnail
//         haveThumbnail: true,
//         // thumbnailWidth: Math.round(width / 2),
//         // thumbnailHeight: Math.round(height / 2),
//         allowedLivePhotos: true,
//         preventAutomaticLimitedAccessAlert: true, // newest iOS 14
//         emptyMessage: 'No albums',
//         selectedColor: '#30475e',
//         maximumMessageTitle: 'Notification',
//         maximumMessage: 'You have selected the maximum number of media allowed',
//         messageTitleButton: 'OK',
//         cancelTitle: 'Cancel',
//         tapHereToChange: 'Tap here to change',
//         //****//
//         //**Android**//
//         //****//
//         //**Both**//
//         usedCameraButton: true,
//         allowedVideo: true,
//         allowedPhotograph: true, // for camera : allow this option when you want to take a photos
//         allowedVideoRecording: false, //for camera : allow this option when you want to recording video.
//         maxVideoDuration: 60, //for camera : max video recording duration
//         numberOfColumn: 3,
//         maxSelectedAssets: 20,
//         singleSelectedMode: false,
//         doneTitle: 'Done',
//         isPreview: true,
//         mediaType: 'all',
//         isExportThumbnail: false,
//         //****//
//         // fetchOption: Object,
//         // fetchCollectionOption: Object,
//         // emptyImage: Image,
//       };
//       //       const response = await openPicker(defaultOptions);

//       //       const crop = response[0].crop;

//       //       // if (crop) {
//       //       //   response.path = crop.path;
//       //       //   response.width = crop.width;
//       //       //   response.height = crop.height;
//       //       // }
//       // // debugLog(response)
//       //       setImages(response);
//       ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true,
//       }).then(async image => {
//         console.log(image);
//         setImages(image);
//         const blurhash = await Blurhash.encode(
//           // Replace 'https://example.com/image.jpg' with the actual image URL
//           image.path,
//           image.height,
//           image.width,
//         );
//         console.log(blurhash);

//         setImages(image);
//       });
//     } catch (e) {}
//   };
//   const [blurhash, setBlurhash] = useState('LGFFaXYk^6#M@-5c,1J5@[or[Q6.');
//   const [decodeAsync, setDecodeAsync] = useState(true);
//   const [encodingImageUri, setEncodingImageUri] = useState(
//     'https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg',
//   );
//   const [isEncoding, setIsEncoding] = useState(false);
//   //#endregion

//   //#region Memos
//   const buttonOpacity = useMemo(
//     () => (encodingImageUri.length < 5 || isEncoding ? 0.5 : 1),
//     [encodingImageUri.length, isEncoding],
//   );
//   const encodeButtonStyle = useMemo(
//     () => [styles.encodeButton, {opacity: buttonOpacity}],
//     [buttonOpacity],
//   );
//   //#endregion

//   //#region Callbacks
//   const onLoadStart = useCallback(() => {
//     console.log('onLoadStart called!');
//   }, []);
//   const onLoadEnd = useCallback(() => {
//     console.log('onLoadEnd called!');
//   }, []);
//   const onLoadError = useCallback(message => {
//     console.log(`onLoadError called! Message: ${message}`);
//   }, []);
//   const startEncoding = useCallback(async () => {
//     try {
//       if (encodingImageUri.length < 5) return;

//       setIsEncoding(true);
//       const _blurhash = await Blurhash.encode(encodingImageUri, 4, 3);
//       setBlurhash(_blurhash);
//       setIsEncoding(false);
//     } catch (e) {
//       setIsEncoding(false);
//       console.warn('Failed to encode!', e);
//       Alert.alert('Encoding error', e.message);
//     }
//   }, [encodingImageUri]);
//   useEffect(() => {
//     startEncoding();
//     // blurhash()
//     // onPicker();
//   }, []);
//   // debugLog(images.path)
//   return (
//     <>
//       <ScrollView>
//         <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         />
//         {/* <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         />
//         <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         />
//         <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         />
//         <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         />
//         <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         />
//         <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         />
//         <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         />
//         <BlurHashImage
//           uri={'https://wallpaper.dog/large/20468918.jpg'}
//           blurHash={blurhash}
//         /> */}
//       </ScrollView>

//       {/* {images && images.path && (
//         <Image source={{uri: images.path}} style={{height: 300, width: 300}} />
//       )} */}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   blurhashContainer: {
//     shadowRadius: 3,
//     shadowOffset: {
//       height: 2,
//       width: 0,
//     },
//     shadowOpacity: 0.4,
//     overflow: 'visible',
//   },
//   blurhashRadiusMask: {
//     elevation: 5,
//     // borderRadius has to be applied to the parent
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   blurhashImage: {
//     width: 300,
//     height: 200,
//     // Custom styling for width, height, scaling etc here
//   },
//   textInput: {
//     marginTop: 20,
//     borderRadius: 5,
//     borderWidth: 1,

//     width: '70%',
//     height: 35,
//     paddingHorizontal: 20,
//     textAlign: 'center',
//   },
//   row: {
//     marginTop: 30,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 16,
//     marginRight: 15,
//   },
//   encodeButton: {
//     height: 37,
//     width: 120,
//     marginTop: 30,
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 35,
//     justifyContent: 'center',
//   },
// });
