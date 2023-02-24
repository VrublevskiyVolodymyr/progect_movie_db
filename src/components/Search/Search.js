import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";
import css from './search.module.css'



const Search = () => {

    const{title}=useParams();
    const dispatch = useDispatch();
    const {searchMovie, total_pages, prev, next, loading} = useSelector(state => state.movies);
    const[query, setQuery]= useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(movieActions.searchMovie( {title, page:query.get('page')}))
    }, [dispatch,query,title])


    return (
        <div className={css.container}>

            <button className="btn btn-dark" id={css.button} disabled={!prev}
                    onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>
                <span></span>  <span></span>  <span></span>  <span></span>Prev</button>

            <div className={css.movies}>

                {searchMovie.length > 0 ?searchMovie.map(movie => <Movie key={movie.id} movie={movie}/>):
                    (<h2>Sorry !! No Movies Found</h2>)}}

                {loading && <ClipLoader color={'#1BFFFF'} loading={loading} size={150}/>}

            </div>

            <button className="btn btn-dark" id={css.button} disabled={next === total_pages + 1}
                    onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>
                <span></span>  <span></span>  <span></span>  <span></span>Next</button>
        </div>
    );
};
export {Search};
