const asistenciaRouter = require('./asistencia');


module.exports = app => {

    app.use('/', asistenciaRouter);
}