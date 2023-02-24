import {apiService} from './apiService'
import {urls} from "../configs";

const moviesService = {
    getAll: (page = 1) => apiService.get(urls.movies, {params: {page}}),
    getGenres: () => apiService.get(urls.genres),
    searchMovie: (title, page = 1) => apiService.get(urls.search_movie(title), {params: {page}}),
    getAllByGenresId: (id, page = 1) => apiService.get(urls.byGenresId(id), {params: {page}}),
    getById: (id) => apiService.get(urls.getById(id))
}

export {moviesService}
