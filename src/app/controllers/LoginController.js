const Course = require('../models/Course')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class NewsControllers {
    // [Get] /news
    index(req, res, next) {
        /* res.json({
            name: 'test'
        }) */
        
        //res.render('home');
       
        //res.send('hung')
        res.render('login')
    }
}

module.exports = new NewsControllers;

