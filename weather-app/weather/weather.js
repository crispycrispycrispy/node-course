var request = require('request');
var apiKey = 'b3e5da1278e0c5d89c2d03850a78f8e9';
var getForecast = (lat, lng, callback) => {
    request({
        url : `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json : true
    },  (error, response, body) => {
        if( !error && response.statusCode == 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
        }
        else callback('Unable to connect to darksky servers');
    })
};

module.exports.getForecast = getForecast;