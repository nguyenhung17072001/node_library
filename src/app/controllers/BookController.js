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
        //console.log('file: -----===', req.file)
        //res.send('ok')
        let formData = req.body
        formData.path=`localhost:3000/book/file/${req.file.filename}`
        const book = new Book(formData)
    
        //console.log('formData: ', formData)
        book.save()
        .then(()=> {
            res.redirect('/book/list')
        }).catch(next)
        
    
    }

    
    showFile(req, res, next) {
        //res.render('../../public/img/1667849578015-978501570')
        
    }

}

module.exports = new CourseControllers;

