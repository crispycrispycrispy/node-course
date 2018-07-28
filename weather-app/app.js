var request = require('request');
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
console.log(argv);

var address = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json : true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat} Longitude: ${body.results[0].geometry.location.lng}`);
});