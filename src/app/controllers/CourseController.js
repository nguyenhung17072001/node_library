const Course = require('../models/Course')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class CourseControllers {
    // [Get] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
        .then((course)=> {
            //console.log(course)
            res.render('courses/show', {
                course: mongooseToObject(course)
            })
        })
        .catch(next)

    }

    // [Get] /courses/create
    create(req, res, next) {
        res.render('courses/create');

    }
    //[POST] /courses/store
    store(req, res, next) {
        //res.json(req.body);
        const formData = req.body
        formData.image=`https://img.hung.com/${req.body.name}`
        const course = new Course(formData)
    
        //console.log('formData: ', formData)
        course.save()
        .then(()=> {
            res.redirect('/')
        }).catch((err)=> {

        }) 
        
    
    }



}

module.exports = new CourseControllers;

