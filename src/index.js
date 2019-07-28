const express = require('express');

const config = require('./server/config');

const { connectMongo } = require('./database');


const app = config(express());

connectMongo()
    .then(db => {

        console.log('DB is  connected');

        app.listen(app.get('port'), () => {
            console.log('Server on port ', app.get('port'));
        })

    })
    .catch(err => console.log(err));