const Book = require('../models/Book')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class CourseControllers {
    // [Get] /book/list
    show(req, res, next) {
        
        Book.find({})
        .then(book=> {
            //res.send('list books')
            res.render('books/show', {
                book: mutipleMongooseToObject(book)
            })
            //console.log('list: ', book)
        })
        .catch(next)
        

    }

    


}

module.exports = new CourseControllers;

