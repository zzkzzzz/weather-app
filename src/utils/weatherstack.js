const request = require("request");

const forecast = (lat, lng, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4900b6da8f0998717573d483e454fb55&query=${lat},${lng}&units=m`;
  request({ url: url, json: true }, (err, { body }) => {
    if (err) {
      callback("unable to connect to location services", undefined);
    } else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      const temp = body.current.temperature;
      const feelslike = body.current.feelslike;
      const description = body.current.weather_descriptions;
      callback(undefined, {
        temperature: temp,
        feelslike: feelslike,
        description: description,
      });
    }
  });
};

module.exports = forecast;
