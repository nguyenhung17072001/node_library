const Course = require('../models/Course')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class NewsControllers {
    // [Get] /news
    index(req, res, next) {
        /* res.json({
            name: 'test'
        }) */
        
        //res.render('home');
       
        Course.find({})
            .then((courses)=> {
                
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(err=> next(err))
    }
}

module.exports = new NewsControllers;

