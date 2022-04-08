import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._error=''
        this._users={}
        makeAutoObservable(this)


    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setUsers(users){
        this._users = users
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
    get users() {
        return this._users
    }
}