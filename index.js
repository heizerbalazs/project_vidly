const reqresDebugger = require('debug')('vidly:reqres');
const dbDebugger = require('debug')('vidly:db');
const config = require('config');
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));

const genres = [
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

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found,');
    res.send(genre);
});

app.post('/api/genres', (req, res) => {
    const { error } = validateGenre
})

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(2).required()
    };
    return Joi.validate(genre, schema);
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => reqresDebugger(`Listening on port ${port}...`));