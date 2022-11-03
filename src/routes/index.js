const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./course')

function route(app) {
    app.get('/', siteRouter); // read db

    
    app.use('/news', newsRouter) 
    app.use('/courses', coursesRouter) // read detail
    
}


module.exports = route;