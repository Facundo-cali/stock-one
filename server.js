const dotenv = require('dotenv').config();
const express = require('express');
const dbConnection = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute.js');
const productRoute = require('./routes/productRoute.js');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes Middleware
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

// Routes
app.get('/', (req, res) => {
    res.send('Home page');
});


// Connect to DB and start server
dbConnection(app);



