const express = require('express');
const app = express();

app.use(express.json());

const generes = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Sci-Fi/Fantasy' },
    { id: 3, name: 'Comedy' }
];

app.get('/', (req, res) => {
    res.send('Welcome on VIDLY');
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
app.listen(port, () => console.log(`Listening on port ${port}...`));