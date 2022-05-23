const express = require('express');
const mongoose = require('mongoose');
const router = require('./router.js');
const bodyParser = require('body-parser');

const {PORT = 3000} = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/storedb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})