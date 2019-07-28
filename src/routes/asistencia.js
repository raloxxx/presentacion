const express = require('express');
const router = express.Router();

const asistencia = require('../controllers/asistencia');

router
    .get('/', asistencia.index)
    // .get('/contact', home.contact)
    // .get('/add', home.index)
    // .post('/')
    // .put('/')
    // .delete('/')

module.exports = router;