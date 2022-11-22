const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const User = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true },
    
    
    
    //createdAt: { type: Date, default: Date.now },
    //updatedAt: { type: Date, default: Date.now },

}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);