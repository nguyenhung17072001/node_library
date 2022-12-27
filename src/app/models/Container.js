const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Container = new Schema({
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    userId: { type: String, required: true },
    path: { type: String },
    bookId: { type: String, required: true }
    //createdAt: { type: Date, default: Date.now },
    //updatedAt: { type: Date, default: Date.now },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Container', Container);