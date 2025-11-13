const express = require('express');

const mongodb = require('./data/database');
const app = express();

const PORT = process.env.PORT || 3000;

// parse JSON bodies
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-control-Allow-origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        "Origin, X-Requested-with, Content-type, Accept,Z-key"
    );
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use('/', require('./routes'))


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(PORT, () => {
    console.log(`database is listening and node is running on port ${PORT}`);
})
    }
})



