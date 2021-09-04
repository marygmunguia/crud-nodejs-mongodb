const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conexion a la db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB conentada!'))
    .catch(err => console.log(err));

// importar rutas
const indexRouter = require('./routes/index');

// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRouter);

// starting the server
app.listen(app.get('port'), () => {
    console.log('server on post ' + app.get("port"));
})