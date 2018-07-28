var geocode = require('./geocode/geocode.js');

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

geocode.getGeocodeAddress(argv.address, (errorMsg, results) => {
    if(errorMsg) console.log(errorMsg)
    else console.log(JSON.stringify(results, undefined, 2))
});

