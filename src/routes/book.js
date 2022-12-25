const express = require('express');
const router = express.Router();
const multer  = require('multer')
//const upload = multer({ dest: 'public/img' })
const bookController = require('../app/controllers/BookController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/img')
    },
    filename: function (req, file, cb) {
        console.log('file1: ', file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+'.jpg')
    }
  })
  
  const upload = multer({ storage: storage })


//bookController.show
router.get('/book/list/:slug', bookController.show);
router.get('/book/create', bookController.create)
router.post('/book/insert', upload.single('path'), bookController.insert);
router.get('/book/file/:slug', bookController.showFile)
router.get('/book/list', bookController.site);
router.get('/book/list/client/:slug', bookController.homeClient);
router.get('/book/update/:slug', bookController.update);
router.put('/book/store/:id', upload.single('path'), bookController.store)
router.delete('/book/delete/:id', bookController.delete)




module.exports = router;