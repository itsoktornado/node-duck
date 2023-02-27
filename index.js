
const express = require('express');
const { readFile } = require('fs').promises;
const { request } = require('http');

const app = express();

app.get('/', async (request, response) => {
    response.send(await readFile('./home.html', 'utf8'));
})

app.get('/duck', async (request, response) => {

    response.send(await readFile('./duck.html', 'utf8'));

})

app.listen(process.env.PORT || 3000, () => console.log('Ducks on http://localhost:3000'))