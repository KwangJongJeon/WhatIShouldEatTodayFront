
let userLocation = {};

const geoLocation = async () => {

  const geoSuccess = (position) => {
    userLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    return userLocation
  }

  const geoError = (error) => {
    console.error(error.message());
    return error.message;
  }

  if(navigator.geolocation) {
    console.log('geoLocation supported');
    return navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    console.log('geolocation is not supported');
    console.log(userLocation);
  }
}

export default geoLocation();