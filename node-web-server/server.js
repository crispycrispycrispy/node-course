const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;//port for heroku

var app = express();
hbs.registerPartials(__dirname + "/views/partials");


app.set('view engine', 'hbs');
// serve up webpages in a directory

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} , ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) { console.log('Unable to append to server.log');}
    });
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

app.use(express.static(__dirname + "/public"));//Express middleware function

hbs.registerHelper('getCurrentYear', () => { return new Date().getFullYear();});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

//serve up html or json
app.get('/', (req, res) => {
    res.render('home.hbs', {
        headerMsg : 'Node Web Server',
        pageTitle : 'Home Page'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        headerMsg : 'Node Web Server',
        pageTitle : 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error : 'You fucked up'
    });
});

app.listen(port, console.log(`Server is up on port ${port}`));