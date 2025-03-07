import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  preset: 'jest-expo',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/expo-env.d.ts',
    '!**/.expo/**'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)'
  ],
  // The navigation test need to have a modified test environment to work properly
  setupFiles: ['./jest.setup.js'],
  // Example below of running a setup after the setupFiles finished creating the test environment
  // setupFilesAfterEnv:["@testing-library/jest-native/extended-expect"],

};
export default config;
