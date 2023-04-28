import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {myStyles} from '../../Common/styles';
import {ActivityIndicator} from 'react-native-paper';
import {debugLog} from '../../Common/common';
import Video from 'react-native-video';
const SearchUser = () => {
  const cam = useRef();
  const check = async () => {
    const newperms = await Camera.requestCameraPermission();
    debugLog(newperms);
  };
  useEffect(() => {
    check();
  }, []);
  const devices = useCameraDevices();
  const device = devices.back;
  if (device == null) return <ActivityIndicator />;
  // const startRecording = async () => {
  //   const recording = await Camera.startRecording({
  //     quality: 60,
  //     maxDuration: 15, // Set maximum duration to 15 seconds
  //     mute: false, // Set to true if you want to record without audio
  //   });

  //   // Wait for recording to finish
  //   const {uri, videoOrientation, deviceOrientation} = await recording.stop();
  //   console.log(uri); // Log the video URI
  // };
  const startRecording = () => {
    try {
      if (cam.current == null) throw new Error('Camera ref is null!');

      console.log('calling startRecording()...');
      cam.current.startRecording({
        onRecordingError: error => {
          console.error('Recording failed!', error);
          // onStoppedRecording();
        },
        onRecordingFinished: video => {
          console.log(`Recording successfully finished! ${video.path}`);

          // onStoppedRecording();
        },
      });
      // TODO: wait until startRecording returns to actually find out if the recording has successfully started
      console.log('called startRecording()!');
      // isRecording.current = true;
    } catch (e) {
      console.error('failed to start recording!', e, 'camera');
    }
  };
  const stopRecording = async () => {
    try {
      if (cam.current == null) throw new Error('Camera ref is null!');

      console.log('calling stopRecording()...');
      await cam.current.stopRecording();
      console.log('called stopRecording()!');
    } catch (e) {
      console.error('failed to stop recording!', e);
    }
  };

  return (
    <>
      <View style={myStyles.coulmn}>
        {/* <Camera
          style={StyleSheet.absoluteFillObject}
          device={device}
          isActive={true}
          video={true}
          audio={true}
          ref={cam}
        />
        <TouchableHighlight
          onPress={startRecording}
          style={{
            height: 90,
            width: 90,
            backgroundColor: 'red',
            borderRadius: 90,
          }}>
          <View></View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={stopRecording}
          style={{
            height: 90,
            width: 90,
            backgroundColor: 'green',
            borderRadius: 90,
          }}>
          <View></View>
        </TouchableHighlight> */}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
});

export default SearchUser;
