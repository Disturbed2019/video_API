const Categories = require('../models/CategoriesModel')

class CategoriesController {
    async createCategories(req, res) {
        try{

            const {name} = req.body
            // console.log(req.body)
            // console.log({name})
            const categories = await Categories.create({name})
            // console.log(categories)
            return res.json(categories)
        }catch (e) {
            return res.status(500).json({message:'Категория не создана'})
        }

    }



    async getAllCategory(req, res) {
        try{
            const category = await Categories.find()
            // console.log(category)
            return res.json(category)
        }
        catch (e) {
            return res.status(500).json({message:'Нет категорий'})
        }

    }

}

module.exports = new CategoriesController()