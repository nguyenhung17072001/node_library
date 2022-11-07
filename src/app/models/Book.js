const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Book = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    descripttion: { type: String },
    releaseDate: { type: Date, required: true },
    numberOfPages: { type: Number},
    type: { type: String, required: true },
    path: { type: String, maxLength: 225 },
    
    slug: { type: String, slug: 'name' , unique: true},
    //createdAt: { type: Date, default: Date.now },
    //updatedAt: { type: Date, default: Date.now },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Book', Book);