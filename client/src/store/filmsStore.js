import {makeAutoObservable} from 'mobx'

export default class FilmsStore {
    constructor() {
        this._films = []
        this._categories = []
        this._selectedCategories = {}
        makeAutoObservable(this)

    }


    setFilms(films) {
        this._films = films
    }
    setCategories(categories) {
        this._categories = categories
    }
    setSelectedCategories(categories) {
        this._selectedCategories = categories
    }

    get films() {
        return this._films
    }

    get categories() {
        return this._categories
    }
    get selectedCategories () {
        return this._selectedCategories
    }


}