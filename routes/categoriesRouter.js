const Router = require('express')
const router = new Router()
const categoriesController = require('../controllers/categoriesController')

// const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', categoriesController.createCategories)
router.get('/', categoriesController.getAllCategory)

module.exports = router