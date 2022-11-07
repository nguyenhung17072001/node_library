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

    // [Get] /book/create
    create(req, res, next) {
        
        res.render('books/create')
        

    }

    insert(req, res, next) {
        //res.json(req.body);
        let formData = req.body
        formData.path=`https://img.hung.com/${req.body._id}`
        const book = new Book(formData)
    
        console.log('formData: ', formData)
        book.save()
        .then(()=> {
            res.redirect('/book/list')
        }).catch(next) 
        
    
    }

    


}

module.exports = new CourseControllers;

