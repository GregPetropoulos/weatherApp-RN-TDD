// work around for mocking (simulate a lib) a native lib that js can't run directly, this file will be automatically ran by jest

// react-native-get-location a module that returns a method getCurrentPosition that must return a promise with property's related to the position

function getCurrentPosition() {
  return Promise.resolve({
    latitude: 0,
    longitude: 0,
    altitude: 0,
    accuracy: 0,
    speed: 0,
    time: 0,
    bearing: 0,
    provider: 0,
    verticalAccuracy: 0,
    course: 0
  });
}
export default { getCurrentPosition };
