const Course = require('../models/Course')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class NewsControllers {
    // [Get] /news
    index(req, res, next) {
        res.render('login')
    }
}

module.exports = new NewsControllers;

