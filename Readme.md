# A simple app to reinforce TDD learning with the new RN architecture and expo 52

## Testing TDD

**Running Test**

- `npm run test`

**Test Jest troubleshooting**

- `npx jest --clearCache`
- `jest --showConfig`
- `npm install -D ts-node`
- `npx expo install @testing-library/react-native -- --save-dev`
- `npm i --save-dev @types/jest`

### Mocked Native Code for Testing

- react-native-get-location
- expo-font

## Permissions

https://www.npmjs.com/package/react-native-get-location

## Useful Commands

**Simulator/Emulator Builds**

- `eas build -p ios --profile development-simulator `
- `eas build --profile development-simulator --platform android`
- `eas build:run` to get build already in EAS, choose one

### RN Troubleshooting

**Clear The Cache**

- rm -rf node_modules
- npm cache clean --force
- npm install
- watchman watch-del-all
- del %localappdata%Temphaste-map-\*
- del %localappdata%Tempmetro-cache
- npx expo start --clear

**Wipe/Erase Simulator Data**

- Remove data from simulator
- eas build:run
- npm start

**3rd Party libs**

- `npx expo install react-native-gesture-handler`
- `npm i -S react-native-get-location`
- `npm install moment --save`
- `npx expo install expo-linear-gradient`
- `npm install dotenv`
- `npx expo install expo-constants`
- `npx expo install expo-location`

#### Environment

- `eas env:pull` then choose the environment and will generate the .env file

## Features

### Navigation

- Drawer
- Bottom Tabs

### User

- Settings
- Add Default Location
- Add Additional Location

### Multiple Theme Support

- Light
- Dark
- Blue
- Green

## Weather API

- National Oceanic and Atmospheric Administration
  - https://weather-gov.github.io/api/general-faqs
