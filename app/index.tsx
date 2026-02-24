import { StyleSheet } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";

export default function Index() {
  const device = useCameraDevice("back");

  if (!device) {
    return null;
  }

  return <Camera device={device} isActive style={StyleSheet.absoluteFill} />;
}
