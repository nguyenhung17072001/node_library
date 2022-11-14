const User = require('../models/User')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
const Book = require('../models/Book')
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
            if(user.admin==true) {
                res.redirect('/book/list/admin')
            }
            else if(user.admin==false) {
                res.send('trang client lam sau')
            }
            
        })
        .catch((err)=> {
            console.log('err: ', err)
            alert("Tài khoản không tồn tại")
        })
    }
}

module.exports = new UserControllers;

