import { ConfigContext, ExpoConfig } from 'expo/config';
import { version } from './package.json';

// Replace these with your EAS project ID and project slug.
// You can find them at https://expo.dev/accounts/[account]/projects/[project].
const EAS_PROJECT_ID = 'ea4dc246-e0a6-4543-b5f2-5748a3185b18';
const PROJECT_SLUG = 'weather-app';
const OWNER = 'gregpetropoulosdev';

// WeatherApp PROD config
// ========================
const APP_NAME = 'Weather App';
const PRODUCT_NAME = 'Weather App';
const BUNDLE_IDENTIFIER = 'com.gregpetropoulosdev.weatherapp';
const PACKAGE_NAME = 'com.gregpetropoulosdev.weatherapp';
const ICON = './assets/images/icons/iOS-Prod.png';
const ADAPTIVE_ICON = './assets/images/icons/Android-Prod.png';
const SCHEME = 'weather-app-scheme';
// ========================
export default ({ config }: ConfigContext): ExpoConfig => {
  console.log('⚙️ Building app for environment:', process.env.APP_ENV);
  const { name, bundleIdentifier, icon, adaptiveIcon, packageName, scheme } =
    getDynamicAppConfig(
      (process.env.APP_ENV as 'development' | 'preview' | 'production') ||
        'development'
    );

  return {
    ...config,
    name: name,
    version, // Automatically bump your project version with `npm version patch`, `npm version minor` or `npm version major`.
    slug: PROJECT_SLUG, // Must be consistent across all environments.
    orientation: 'portrait',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    icon: icon,
    scheme: scheme,
    ios: {
      supportsTablet: true,
      bundleIdentifier: bundleIdentifier,
       infoPlist: {
        NSLocationWhenInUseUsageDescription: "This app needs access to your location",
        NSLocationAlwaysAndWhenInUseUsageDescription: "This app needs access to your location",
          UIBackgroundModes: [
          "location"
        ]
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: adaptiveIcon,
        backgroundColor: '#ffffff'
      },
      package: packageName
    },
    updates: {
      url: `https://u.expo.dev/${EAS_PROJECT_ID}`
    },
    runtimeVersion: {
      policy: 'appVersion'
    },
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID
      }
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png'
    },
    plugins: [
      'expo-router',
      [
        'expo-location',
        {
          locationAlwaysAndWhenInUsePermission:
            `Allow ${PRODUCT_NAME} to use your location.`
        }
      ],
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff'
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    },
    owner: OWNER
  };
};

// Dynamically configure the app based on the environment.
// Update these placeholders with your actual values.
export const getDynamicAppConfig = (
  environment: 'development' | 'preview' | 'production'
) => {
  if (environment === 'production') {
    return {
      name: APP_NAME,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      packageName: PACKAGE_NAME,
      icon: ICON,
      adaptiveIcon: ADAPTIVE_ICON,
      scheme: SCHEME
    };
  }
  if (environment === 'preview') {
    return {
      name: `${APP_NAME} Preview`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      icon: './assets/images/icons/iOS-Prev.png',
      adaptiveIcon: './assets/images/icons/Android-Prev.png',
      scheme: `${SCHEME}-prev`
    };
  }
  return {
    name: `${APP_NAME} Development`,
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    packageName: `${PACKAGE_NAME}.dev`,
    icon: './assets/images/icons/iOS-Dev.png',
    adaptiveIcon: './assets/images/icons/Android-Dev.png',
    scheme: `${SCHEME}-dev`
  };
};

// "expo": {
//   name: "weather-app",
//   "slug": "weather-app",
//   "version": "1.0.0",
//   "orientation": "portrait",
//   "icon": "./assets/images/icon.png",
//   "scheme": "myapp",??
//   "userInterfaceStyle": "automatic",??
//   "newArchEnabled": true,??
//   "splash": {
//     "image": "./assets/images/splash-icon.png",
//     "resizeMode": "contain",
//     "backgroundColor": "#ffffff"
//   },
//   "ios": {
//     "supportsTablet": true,
//     "bundleIdentifier": "com.gregpetropoulosdev.weatherapp",
//     "infoPlist": {
//       "ITSAppUsesNonExemptEncryption": false,
//       "NSLocationWhenInUseUsageDescription":"This app needs to get your location for the weather info"
//     }
//   },
//   "android": {
//       "permissions": ["android.permission.ACCESS_FINE_LOCATION" ],
//     "adaptiveIcon": {
//       "foregroundImage": "./assets/images/adaptive-icon.png",
//       "backgroundColor": "#ffffff"
//     },
//     "package": "com.gregpetropoulosdev.weatherapp"
//   },
//   "web": {
//     "bundler": "metro",
//     "output": "static",
//     "favicon": "./assets/images/favicon.png"
//   },
//   "plugins": [
//     "expo-router",
//     [
//       "expo-location",
//       {
//         "locationAlwaysAndWhenInUsePermission": "Allow Weather App to use your location."
//       }
//     ]
//   ],
//   "experiments": {
//     "typedRoutes": true
//   },
//   "extra": {
//     "router": {
//       "origin": false
//     },
//     "eas": {
//       "projectId": "ea4dc246-e0a6-4543-b5f2-5748a3185b18"
//     }
//   }
// }
