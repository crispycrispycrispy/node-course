var axios = require('axios');

var yargs = require('yargs');
var argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

var encodedaddress = encodeURIComponent(argv.address);
var key = 'AIzaSyB--MniXKdzk5q6lBWCe8xNEH_5jx6qmi0';
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}&key=${key}`;
var apiKey = 'b3e5da1278e0c5d89c2d03850a78f8e9';

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
})
.then((response) => {
    var temp = response.data.currently.temperature;
    var app_temp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temp} but it feels like ${app_temp}`);
})
.catch((e) => {
    if(e.code == 'ENOTFOUND'){
        console.log('Unable to connect to api servers');
    }else{
        console.log(e.message);
    }
});

