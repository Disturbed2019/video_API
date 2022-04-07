import {$authHost, $host} from "./index";


export const createFilms = async (films) => {
    const {data} = await $host.post('api/films', films)
    return data
}


export const fetchFilms = async (categories) => {
    const {data} = await $host.get('api/films', {params:{categories}})
    return data
}
// export const fetchCategoriesFilms = async (category) => {
//     console.log(category)
//     const {data} = await $host.get('api/films'+ category)
//     return data
// }

export const fetchOneFilm = async (id) => {
    const {data} = await $host.get('api/films/' + id)
    return data
}
export const fetchCategories = async () => {
    const {data} = await $host.get('api/categories/')
    return data
}


