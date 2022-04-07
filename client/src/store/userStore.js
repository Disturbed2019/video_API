import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._error=''
        makeAutoObservable(this)


    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setError(error){
        this._error= error
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get error(){
        return this._error
    }
}