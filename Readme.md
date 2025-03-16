# A simple app to reinforce TDD learning with the new RN architecture and expo 52

## Test Suites

### Mocked Native code

- react-native-get-location
- expo-font


### Packages that need permissions

https://www.npmjs.com/package/react-native-get-location

### Useful commands

**Simulator/Emulator Builds**

- `eas build -p ios --profile development-simulator `
- `eas build --profile development-simulator --platform android`
- `eas build:run` to get build already in EAS, choose one

**Test Jest troubleshooting**

- `npx jest --clearCache`
- `jest --showConfig`
- `npm install -D ts-node`
- `npx expo install @testing-library/react-native -- --save-dev   `
- `npm i --save-dev @types/jest`

**Running Test**
- `npm run test`
**3rd Party libs**

- `npx expo install react-native-gesture-handler`
- `npm i -S react-native-get-location`
- `npm install moment --save`
- `npx expo install expo-linear-gradient`
