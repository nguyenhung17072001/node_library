const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Evaluate = new Schema({
    bookId: { type: String, required: true },
    userId: { type: String, required: true },
    comment: { type: String },
    rate: { type: Number, required: true },
    username: { type: String },
    
    //createdAt: { type: Date, default: Date.now },
    //updatedAt: { type: Date, default: Date.now },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Evaluate', Evaluate);