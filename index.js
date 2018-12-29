const reqresDebugger = require('debug')('vidly:reqres');
const dbDebugger = require('debug')('vidly:db');
const config = require('config');
const genres = require('./routes/genres');
const homepage = require('./routes/homepage');
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));
app.use('api/genres', genres);
app.use('/', homepage);


dbDebugger('Connected to database...');


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => reqresDebugger(`Listening on port ${port}...`));