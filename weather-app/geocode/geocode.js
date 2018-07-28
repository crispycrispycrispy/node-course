var request = require('request');

var getGeocodeAddress = (address,  callback) => {
    var encodedaddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
        json : true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to google servers');
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('unable to find address');
        }
        else if(body.status === 'OK'){
            callback(undefined, {
                address : body.results[0].formatted_address,
                lat : body.results[0].geometry.location.lat,
                lon : body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = {
    getGeocodeAddress
}