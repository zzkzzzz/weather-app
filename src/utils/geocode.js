const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiemlrYW5nIiwiYSI6ImNrYzYxazg3bjA0bzczYm80d3JoMnVlZjQifQ.QeJxxnza75tEwQiNkEWk_g&limit=1`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to location services", undefined);
    } else if (body.features.length === 0) {
      callback("unable to find location, Try another search", undefined);
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      const placename = body.features[0].place_name;
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        placename: placename,
      });
    }
  });
};

module.exports = geocode;
