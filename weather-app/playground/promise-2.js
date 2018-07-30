var request = require('request');

var geocodeAddress = (address) => {
    return new Promise( (resolve, reject) => {
        var encodedaddress = encodeURIComponent(address);
        request({
            url: `https://maapsgoogleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
            json : true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to google servers');
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('unable to find address');
            }
            else if(body.status === 'OK'){
                resolve({
                    address : body.results[0].formatted_address,
                    lat : body.results[0].geometry.location.lat,
                    lon : body.results[0].geometry.location.lng
                });
            }
        })
    });
}

geocodeAddress(400074).then(
    (location) => {
        console.log(JSON.stringify(location, undefined, 2));
    },
    (error) => { console.log(error); }
)

// var getgeocodeAddress = (address,  callback) => {
//     var encodedaddress = encodeURIComponent(address);
//     request({
//         url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
//         json : true
//     }, (error, response, body) => {
//         if(error){
//             callback('Unable to connect to google servers');
//         }
//         else if(body.status === 'ZERO_RESULTS'){
//             callback('unable to find address');
//         }
//         else if(body.status === 'OK'){
//             callback(undefined, {
//                 address : body.results[0].formatted_address,
//                 lat : body.results[0].geometry.location.lat,
//                 lon : body.results[0].geometry.location.lng
//             });
//         }
//     });
// };