const mongoose = require('mongoose');

async function connect() {
    try {
        //await mongoose.connect('mongodb://localhost:27017/library');
        //await mongoose.connect('mongodb+srv://nguyenhung17072001:Gj562u5tGX4v1xlA@quang.yuespkr.mongodb.net/library?retryWrites=true&w=majority&appName=persional');
        //await mongoose.connect('mongodb+srv://quang:Gj562u5tGX4v1xlA@persional.yuespkr.mongodb.net/library?retryWrites=true&w=majority&appName=persional');
        

        console.log('connect successfully!!!! ');
    } catch(err) {
        console.log('connect fail!!!! ', err);
    }
}


module.exports = { connect };