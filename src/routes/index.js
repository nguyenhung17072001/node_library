
const bookRouter = require('./book')
const userRouter = require('./user')
function route(app) {
    app.use('/', bookRouter); // read db
    app.use('/login', userRouter )
    
   
     

}


module.exports = route;