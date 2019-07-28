// const { Image } = require('../models/index');

const ctrl = {};

ctrl.index = async(req, res) => {
    res.render('index');
    // await Image
    //     .find()
    //     .sort({ timeStamp: 1 })
    //     .then(images => {
    //         res.render('index', { images: images });
    //     })
};


module.exports = ctrl;