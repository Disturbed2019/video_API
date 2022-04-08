require('dotenv').config()
const User = require('../models/UserModel')
const {validationResult} = require('express-validator');
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {

    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors:errors.array(),
                    message:'Некоректные данные при регистрации'
                })
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})
            if (candidate){
                return  res.status(400).json({message:'Такой пользователь уже есть!'})
            }
            const hashedPass = await bcrypt.hash(password, 12)
            const user = new User({
                email,
                password:hashedPass
            })
            await user.save()
            return  res.status(201).json({message:'Пользователь создан'})




        } catch (e) {
            return  res.status(500).json({message:'Что то пошло не так'})
        }

    }
    async login(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors:errors.array(),
                    message:'Некоректные данные при входе в систему'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({email})

            if (!user){
                return res.status(400).json({message:" Такого пользователя нет"})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch){
                return res.status(400).json({message:" Неверный пароль"})
            }

            const token = jwt.sign({userId: user.id}, process.env.TOKEN_KEY, { expiresIn: '24h'})

            return res.json({token})


        } catch (e) {
            return res.status(500).json({message:'Что то пошло не так'})
        }
    }
    async check(req, res, next) {

    }


    async getUsers(req,res) {
        try{
            const users = await User.find()


            return res.json(users)
        }catch (e) {
            return res.status(500).json({message:'Что то пошло не так'})
        }
    }

}
module.exports = new UserController()