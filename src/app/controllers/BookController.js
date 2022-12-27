const Book = require('../models/Book')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
const fs = require('fs');
const User = require('../models/User');
const Evaluate = require('../models/Evaluate')
const Container = require('../models/Container')

const store = require('../Storage/Store')
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
            console.log('book: ', book)
            if(req.params.slug=='admin'){
                res.render('books/show', {
                    book: {
                        ...mutipleMongooseToObject(book),
                        admin: true
                    },
                    
                })
            }
            else {
                //res.send('chua lam client')
                //console('id: ', req.params)
                res.render('books/show', {
                    book: {
                        ...mutipleMongooseToObject(book),
                        client: true,
                        //id: req.params.slug
                    },
                    
                })
            }
            //console.log('list: ', book)
        })
        .catch(next)
        

    }

    homeClient(req, res, next) {
        User.findOne({_id: req.params.slug})
        .then((user)=> {
            Book.find({})
            .then((book)=> {
                res.render('client/home', {
                    userId: user._id,
                    book: mutipleMongooseToObject(book),
                    user: mongooseToObject(user)
                })
            })
            
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
        formData.path=`http://localhost:3000/book/file/${req.file.filename}`
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

    update(req, res, next) {
        //console.log('req.body._id: ', req.params.slug)
        Book.findById(req.params.slug)
        .then((book)=> {
            console.log(book)
            res.render('books/update', {
                book: mongooseToObject(book)
            })
        })
    }


    //[PUT] /book/:id
    store(req, res, next) {
        //res.send('hung')
        console.log('req.body: ', req.body)
        Book.updateOne({_id: req.params.id}, req.body)
        .then(()=> {
            res.redirect('/book/list/admin')
        })
        .catch(next)
    }

    delete(req, res, next) {
        Book.deleteOne({_id: req.params.id})
            .then(()=> {
                res.redirect('back');
            })
            .catch(next); 
            //res.send('hung')
    }



    //client
    showDetail(req, res, next) {
        Book.findOne({_id: req.params.id})
        .then(async(book)=> {
            let evaluate;
            await Evaluate.find({bookId: req.params.id})
            .then((eva)=> {
                evaluate=eva;
            })
            
            



            let user = store.get('user')
            await res.render('client/detail', {
                user: user,
                book: mongooseToObject(book),
                evaluate: mutipleMongooseToObject(evaluate)
            })
        })
        .catch(next)
        
    }

    rate(req, res, next) {
        console.log(req.body)
        let username= store.get('user').username;
        let formData = req.body
        formData.username=username;
        let evaluate = new Evaluate(formData);
        evaluate.save()
        .then(()=> {
            res.redirect('back')
        })
        .catch(next)


    }

    buy(req, res, next) {
        let formData= req.body;

        let order = new Container(formData);
        order.save()
        .then(()=> {
            res.redirect('back');
        })
        .catch(next)
    }

}

module.exports = new CourseControllers;

