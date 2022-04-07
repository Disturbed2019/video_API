const Router = require('express')
const router  = new Router()
const filmsController = require('../controllers/filmsController')


router.post('/',filmsController.createFilms)
router.get('/', filmsController.getAllFilms)
router.get('/:id', filmsController.getOneFilms)





module.exports = router