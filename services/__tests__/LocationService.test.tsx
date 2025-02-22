import LocationService from '../LocationService';
// The npm lib react-native-get-location is impossible test with jest directly because
//  it has native dependencies which are not available in JavaScript environment
// Work around is mock the lib with jest in the mocks file see weather-app/__mocks__/react-native-get-location.ts


describe('LocationService', () => {
  test('Should return latitude & longitude from the current location', async () => {
    const position = await LocationService.getCurrentPosition();
    expect(position).toEqual({ latitude: 0, longitude: 0 });
  });
});
