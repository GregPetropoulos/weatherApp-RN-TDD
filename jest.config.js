module.exports = {
  preset: 'jest-expo',
	// setupFiles: ['./jest-setup.js'],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // transformIgnorePatterns: [
  //   "node_modules/(?!((jest-)?react-native|@react-native(-community)?|@rneui|@tanstack/react-query|@dev-plugins/)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/*|@sentry/react-native|native-base|react-native-svg)"
  // ],
  collectCoverage: true,
		collectCoverageFrom: [
			"**/*.{ts,tsx,js,jsx}",
			"!**/coverage/**",
			"!**/node_modules/**",
			"!**/babel.config.js",
			"!**/expo-env.d.ts",
			"!**/.expo/**"
		]
};
