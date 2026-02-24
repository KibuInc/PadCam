# PadCam

Reproduces a react-native-vision-camera issue where a blank screen is rendered
in an Expo app with `supportsTablet` set to `false`.

To reproduce:

- Clone the repo
- `npm install`
- `npx expo run:ios -d` and select a connected iPad device
- Tap on the "Test" button, which presents a `<Camera />` component in a modal
  view. If `supportsTablet` is `true` it works, but in this project it renders
  as a blank screen.
