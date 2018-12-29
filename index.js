const reqresDebugger = require('debug')('vidly:reqres');
const dbDebugger = require('debug')('vidly:db');
const config = require('config');
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));

const generes = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Sci-Fi/Fantasy' },
    { id: 3, name: 'Comedy' }
];

dbDebugger('Connected to database...');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'VIDLY',
        message: 'Welcome on VIDLY'
    });
});

app.get('/api/generes', (req, res) => {
    res.send(generes);
})

function validateGenere(genere) {
    const schema = {
        name: Joi.string().min(2).required()
    };
    return Joi.validate(genere, schema);
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => reqresDebugger(`Listening on port ${port}...`));