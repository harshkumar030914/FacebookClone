// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { View, StyleSheet, TouchableHighlight } from "react-native";
// import {
//   Camera,
//   useCameraDevices,
//   useCameraStream,
// } from "react-native-vision-camera";
// import { ActivityIndicator } from "react-native-paper";
// import Video from "react-native-video";
// import { debugLog } from "./src/Common/common";
// import { myStyles } from "./src/Common/styles";
// import { FILTERS } from "./Filter";
// import { ImageFilter } from "react-native-image-filter-kit";
// const CaptureButton = () => {
//   // const cam = useRef();
//   // const check = async () => {
//   //   const newperms = await Camera.requestCameraPermission();
//   //   debugLog(newperms);
//   // };
//   // useEffect(() => {
//   //   check();
//   // }, []);
// const devices = useCameraDevices();
// const device = devices.back;
// if (device == null) return <ActivityIndicator />;
//   // // const startRecording = async () => {
//   // //   const recording = await Camera.startRecording({
//   // //     quality: 60,
//   // //     maxDuration: 15, // Set maximum duration to 15 seconds
//   // //     mute: false, // Set to true if you want to record without audio
//   // //   });

//   // //   // Wait for recording to finish
//   // //   const {uri, videoOrientation, deviceOrientation} = await recording.stop();
//   // //   console.log(uri); // Log the video URI
//   // // };
//   // const startRecording = () => {
//   //   try {
//   //     if (cam.current == null) throw new Error("Camera ref is null!");

//   //     console.log("calling startRecording()...");
//   //     cam.current.startRecording({
//   //       onRecordingError: (error) => {
//   //         console.error("Recording failed!", error);
//   //         // onStoppedRecording();
//   //       },
//   //       onRecordingFinished: (video) => {
//   //         console.log(`Recording successfully finished! ${video.path}`);

//   //         // onStoppedRecording();
//   //       },
//   //     });
//   //     // TODO: wait until startRecording returns to actually find out if the recording has successfully started
//   //     console.log("called startRecording()!");
//   //     // isRecording.current = true;
//   //   } catch (e) {
//   //     console.error("failed to start recording!", e, "camera");
//   //   }
//   // };
//   // const stopRecording = async () => {
//   //   try {
//   //     if (cam.current == null) throw new Error("Camera ref is null!");

//   //     console.log("calling stopRecording()...");
//   //     await cam.current.stopRecording();
//   //     console.log("called stopRecording()!");
//   //   } catch (e) {
//   //     console.error("failed to stop recording!", e);
//   //   }
//   // };
//   const [filter, setFilter] = useState(null);
//   const [device, setDevice] = useState(null);
//   const { cameraDevices, getCameraPermissions } = useCameraDevices();

//   const handleFilterChange = selectedFilter => {
//     const newFilter = FILTERS.find(f => f.title === selectedFilter)?.filter;
//     setFilter(newFilter);
//   };

//   const handleDeviceChange = newDevice => {
//     setDevice(newDevice);
//   };

//   const handleCapture = async camera => {
//     const photo = await camera.takePhoto({ quality: 'High' });
//     const filteredImage = await ImageFilter.filterImage(
//       { uri: photo.uri },
//       filter,
//       ImageFilter.constants.colorMatrix,
//     );
//     // Save the filteredImage to disk
//   };
//   return (
//     <>
//       <View style={myStyles.coulmn}>
//         <Camera style={{ flex: 1 }} device={device} isActive={true} ref={cam} />
//         {/* <TouchableHighlight
//           onPress={startRecording}
//           style={{
//             height: 90,
//             width: 90,
//             backgroundColor: "red",
//             borderRadius: 90,
//           }}
//         >
//           <View></View>
//         </TouchableHighlight>
//         <TouchableHighlight
//           onPress={stopRecording}
//           style={{
//             height: 90,
//             width: 90,
//             backgroundColor: "green",
//             borderRadius: 90,
//           }}
//         >
//           <View></View>
//         </TouchableHighlight> */}
//       </View>
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },
//   camera: {
//     flex: 1,
//   },
// });

// export default CaptureButton;
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from "react-native-vision-camera";
import { AdenCompat, _1977Compat } from "react-native-image-filter-kit";
const CaptureButton = () => {
  // const devices = useCameraDevices();
  // const device = devices.front;
  // if (device == null) return <ActivityIndicator />;
  const FILTERS = [
    {
      title: "Normal",
      filterComponent: null,
    },
    {
      title: "Aden",
      filterComponent: AdenCompat,
    },
    {
      title: "1977",
      filterComponent: _1977Compat,
    },
  ];
  // const devices = useCameraDevices();
  // const device = devices.front;
  // const [filterIndex, setFilterIndex] = useState(0);
  // const filterComponent = FILTERS[filterIndex].filterComponent;
  // const filterRef = useRef(null);

  // if (device == null) return <ActivityIndicator />;

  // const onFilterButtonPress = () => {
  //   const nextIndex = (filterIndex + 1) % FILTERS.length;
  //   setFilterIndex(nextIndex);
  // };
  // React.useEffect(() => {
  //   useFrameProcessor((frame) => {
  //     if (filterComponent != null) {
  //       if (!filterRef.current) {
  //         filterRef.current = new filterComponent();
  //       }
  //       filterRef.current.render(frame);
  //     }
  //   });
  // }, []);
  const devices = useCameraDevices();
  const device = devices.front;
  const [filterIndex, setFilterIndex] = useState(0);
  const filterComponent = FILTERS[filterIndex].filterComponent;
  const filterRef = useRef(null);

  if (device == null) return <ActivityIndicator />;

  const onFilterButtonPress = () => {
    const nextIndex = (filterIndex + 1) % FILTERS.length;
    setFilterIndex(nextIndex);
  };

  React.useEffect(() => {
    const frameProcessor = (frame) => {
      if (filterComponent != null) {
        if (!filterRef.current) {
          filterRef.current = new filterComponent();
        }
        filterRef.current.render(frame);
      }
    };

    const subscription = useFrameProcessor(frameProcessor);

    return () => subscription.unsubscribe();
  }, [filterComponent]);

  return (
    <View style={styles.container}>
      <Camera device={device} style={styles.camera} isActive={true} />
      <TouchableOpacity
        style={styles.filterButton}
        onPress={onFilterButtonPress}
      >
        <Text style={styles.filterButtonText}>
          {FILTERS[filterIndex].title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  camera: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
  },
  preview: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  filterButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  filterButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  flipButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  flipButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
  },
});

export default CaptureButton;
