const baseURL='https://api.themoviedb.org/3'
const access='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTJmOGFmYWRkNWFmMmY1M2ViNjg2NjFjYzc3MjdjOSIsInN1YiI6IjYzZWU3N2VhODhiMTQ4MDBhYjVjYWI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zMyk0SWJO4OX7ncdSZTSOdA9YJZKfUUJvbiu-K9cRLo'
const imageURL = 'https://image.tmdb.org/t/p/w500/'

const urls= {
    movies: '/discover/movie?',
    genres:  '/genre/movie/list',
    search_movie: (title) => `/search/movie?query=${title}`,
    byGenresId: (id)=> `/discover/movie?&with_genres=${id}`,
    getById:(id)=> `/movie/${id}`
}

export {baseURL,imageURL,urls,access}
