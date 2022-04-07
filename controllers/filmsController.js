// const uuid = require('uuid')
const path = require('path')
const Films = require('../models/FilmsModel')

class FilmsController {
    async createFilms(req, res) {
        try {
            let {title, year, category, description, rating, trailer_link} = req.body
            console.log(req.body)
            const {preview_img} = req.files
            const {bg_img} = req.files
            // let posters = uuid.v4() + ".jpg"
            // let bg = uuid.v4() + ".jpg"
            await preview_img.mv(path.resolve(__dirname, '..', 'client/public/assets/posters', preview_img.name)) //posters
            await bg_img.mv(path.resolve(__dirname, '..', 'client/public/assets/backgrounds', bg_img.name)) // bg

            const film = await Films.create({
                title,
                year,
                category,
                description,
                rating,
                trailer_link,
                preview_img: preview_img.name,
                bg_img: bg_img.name
            });
            return res.json(film)
        } catch (e) {
            return  res.status(500).json({message:'Ошибка при загрузке фильма'})
        }

    }




    async getAllFilms(req, res) {
        try {
            let {categories} = req.query
            let films;
            if (categories){
                films = await Films.find({category:categories})

            }
            if (!categories || undefined){
                films = await Films.find()
            }

            // console.log(films)
            return  res.json(films)
        } catch (e) {
            return  res.status(500).json({message:'что то пошло не так'})
        }
    }


    async getOneFilms(req, res) {
        try {
            const {id} = req.params
            const film = await Films.findById(id)
            return  res.json(film)
        } catch (e) {
            return  res.status(500).json({message:'что то пошло не так'})

        }
    }




}
module.exports = new FilmsController()