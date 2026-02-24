import { Stack, useRouter } from "expo-router";
import { Button, StyleSheet } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";

export default function CameraScreen() {
  const device = useCameraDevice("back");
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: ({ tintColor }) => (
            <Button
              onPress={() => {
                router.back();
              }}
              title="Done"
              color={tintColor}
            />
          ),
        }}
      />
      {device && (
        <Camera device={device} isActive style={StyleSheet.absoluteFill} />
      )}
    </>
  );
}
