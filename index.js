const mongoose = require('mongoose');
const reqresDebugger = require('debug')('vidly:reqres');
const dbDebugger = require('debug')('vidly:db');
const config = require('config');
const customers = require('./routes/customers');
const genres = require('./routes/genres');
const homepage = require('./routes/homepage');
const Joi = require('joi');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
        .then(() => dbDebugger('Connected to MongoDB...'))
        .catch(err => dbDebugger('Could not connect to MongoDB...', err));

app.use(express.json());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));
app.use('/api/customers', customers);
app.use('/api/genres', genres);
app.use('/', homepage);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => reqresDebugger(`Listening on port ${port}...`));