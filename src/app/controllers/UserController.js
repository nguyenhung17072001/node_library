const User = require('../models/User')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
const Book = require('../models/Book')
//const alert = require('alert')
class UserControllers {
    // [Get] /login
    login(req, res, next) {
        /* res.json({
            name: 'test'
        }) */
        
        //res.send('hung');
        res.render('login')
       
        
    }

    //[Post] /login/auth
    auth(req, res, next) {
        
        User.findOne({
            username: req.body.username,
            password: req.body.password,
        })
        .then((user)=> {
            //res.send('hung')
            if(user) {
                
                if(user.admin==true) {
                    res.redirect('/book/list/admin')
                }
                else if(user.admin==false) {
                    res.redirect(`/book/list/client/${user._id}`)
                } 
            } 
            else if(!user) {
                res.render('login', {
                    validateUsername: 'Tài khoản không tồn tại'
                })
            }
            
        })
        .catch(next)
    }

    register(req, res, next) {
        res.render('register')
    }

    create(req, res, next) {
        User.findOne({
            username: req.body.username,
            //password: req.body.password,
        })
        .then((user)=> {
            if(user) {
                //alert('Tồn tại tài khoản')
                res.render('register', {
                    validateUsername: 'Tên tài khoản đã tồn tại',
                    validateEmail: 'Email đã tồn tại'
                })
            }
            else if(!user) {
                let formData=req.body;
                formData.admin=false
                let u = new User(formData)
                u.save()
                .then(()=> {
                    res.redirect('/login')
                })
                //alert('Có thể đăng ký')
            }
        })
    }
}

module.exports = new UserControllers;

