const express = require('express');
const makeCrud = require('express-json-file-crud').makeCrud;

let entity='cars';
const carCrud = makeCrud(entity, './data');

// Create-Update-Delete (CRUD) route for entity
const app = express();
app.use('/'+entity, carCrud); // e.g. /cars

// default route
app.get('/', (req, resp) => {
/*   resp.setHeader('Content-Type', 'application/json; charset=utf-8');
  resp.send('{ "greeting": "JSON-API"}');
 */
  resp.send('<h2>Greeting</h2><a href="/cars">Get cars</a>');
});

//configure the server port
const port = 5001;
app.listen(port, () => {
    console.log('Server runs on port ' + port);
})

