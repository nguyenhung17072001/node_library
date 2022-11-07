const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/library');
        console.log('connect successfully!!!! ');
    } catch(err) {
        console.log('connect fail!!!! ');
    }
}


module.exports = { connect };