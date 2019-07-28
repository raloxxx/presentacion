const mongoose = require('mongoose');

const { database } = require('./keys');

module.exports = {

    connectMongo: function() {

        return mongoose.connect(
            database.URI, {
                useNewUrlParser: true
            }
        )

    }
}