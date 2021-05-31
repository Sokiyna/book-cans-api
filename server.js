const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require ('mongoose');
const getBookssHandler = require('./modules');



const app = express();
app.use(cors());

const PORT = process.env.PORT;



app.get('/books', getBookssHandler);



app.get('/', homeRouteHandler );
function homeRouteHandler (req, res) {
    res.send('home route')
}



app.get('*', errorsHandler );
function errorsHandler (req, res) {
    res.status(404).send('Something went wrong');
}

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})