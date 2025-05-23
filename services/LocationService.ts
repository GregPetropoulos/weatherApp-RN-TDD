// class is a preference to organize service with static methods,
// not many instances are needed in the case
//https://www.npmjs.com/package/react-native-get-location

import GetLocation from 'react-native-get-location';

class LocationService {
  //asynchronous method to return the users method
  static async getCurrentPosition() {
    // return Promise.reject()
    return await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000
    }).then(({ latitude, longitude }) => ({ latitude, longitude }));
  }
}
export default LocationService;
