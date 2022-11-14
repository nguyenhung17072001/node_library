const Book = require('../models/Book')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
const fs = require('fs');


class CourseControllers {
    site(req, res, next) {
        //console.log('log: ', req.params.slug)
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
    // [Get] /book/list
    show(req, res, next) {
        //console.log('log: ', req.params.slug)
        Book.find({})
        .then(book=> {
            //res.send('list books')
            if(req.params.slug=='admin'){
                res.render('books/show', {
                    book: {
                        ...mutipleMongooseToObject(book),
                        admin: true
                    },
                    
                })
            }
            else {
                res.send('chua lam client')
            }
            //console.log('list: ', book)
        })
        .catch(next)
        

    }

    // [Get] /book/create
    create(req, res, next) {
        
        res.render('books/create')
        

    }

    // [POST] /book/insert/:slug
    insert(req, res, next) {
        
        let formData = req.body
        formData.path=`localhost:3000/book/file/${req.file.filename}`
        const book = new Book(formData)
    
        book.save()
        .then(()=> {
            res.redirect('/book/list/admin')
        }).catch(next) 
        
    
    }

    showFile(req, res, next) {
        //console.log('req: ', req.params.slug)
        //res.send('hung 1' + req.params.slug)

        let imageFile = "src/public/img/"+req.params.slug
        
        fs.readFile(imageFile, (err, data)=> {
            if(err) {
                console.log('err in read file: ', err)
                alert('Lỗi khi mở ảnh')
            }
            //console.log('data: ', data)
            res.end(data)

        })
    }


}

module.exports = new CourseControllers;

