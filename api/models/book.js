const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    author: {
        awards: String,
        name: String
    }
});

module.exports = mongoose.model('Book', bookSchema);
