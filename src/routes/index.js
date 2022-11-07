
const bookRouter = require('./book')

function route(app) {
    app.use('/', bookRouter); // read db

    
   
     

}


module.exports = route;