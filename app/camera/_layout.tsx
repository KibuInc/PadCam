import { Stack } from "expo-router";

export default function CameraLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Camera",
          headerBlurEffect: "systemChromeMaterialDark",
          headerTintColor: "white",
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}
