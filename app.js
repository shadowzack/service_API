const express = require('express');
const app = express();

const booksRoutes=require('./api/routes/books');

app.use('/books',booksRoutes);


/*
app.use((req, res, next) => {

    res.status(200).json({
        message: "it wroks"
    });
});
*/


module.exports = app;