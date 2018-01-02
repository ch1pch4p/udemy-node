const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/6b836c54b83f62919d99f8c10f57f8c4/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
}

module.exports.getWeather = getWeather;