import { Stack, useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              title="Test"
              onPress={() => {
                router.navigate("/camera");
              }}
            />
          ),
        }}
      />
      <View />
    </>
  );
}
