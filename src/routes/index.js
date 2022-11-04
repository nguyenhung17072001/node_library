const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./course')
const loginRouter = require('./login')

function route(app) {
    app.get('/', siteRouter); // read db

    
    app.use('/news', newsRouter)
    app.use('/courses', coursesRouter) // read detail
    app.use('/login', loginRouter)
}


module.exports = route;