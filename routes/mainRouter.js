const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const filmsRouter = require('./filmsRouter')
const categoryRouter = require('./categoriesRouter')

router.use('/user', userRouter)
router.use('/films', filmsRouter)
router.use('/categories', categoryRouter)



module.exports = router