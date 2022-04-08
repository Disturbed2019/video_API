const Router = require('express')
const router  = new Router()
const userController = require('../controllers/userController')
const {check} = require('express-validator');

router.post('/registration',
    [
        check('email', 'Некоректный email').isEmail(),
        check('password', 'Минимальная длинна пароля 6 символов')
            .isLength({
                min:6
            })
    ],
    userController.registration )

router.post('/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()

    ]
    ,userController.login )

router.get('/auth',userController.check )

router.get('/', userController.getUsers)



module.exports = router