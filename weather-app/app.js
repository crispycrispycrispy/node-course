var geocode = require('./geocode/geocode.js');
var weather = require('./weather/weather.js');

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
// console.log(argv);

geocode.getGeocodeAddress(argv.address, (error, results) => {
    if(error) console.log(error)
    else{
        console.log(`Temperature for address: ${results.address}`);
        weather.getForecast(results.lat, results.lon, (error, weatherInfo) => {
            if(error) console.log(error)
            else console.log(JSON.stringify(weatherInfo, undefined, 2))
        });
    }
});

