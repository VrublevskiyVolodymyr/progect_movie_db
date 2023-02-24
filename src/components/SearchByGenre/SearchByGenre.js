import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import css from './searchGenre.module.css'

const SearchByGenre = () => {

    const {idGenre} = useParams();
    const dispatch = useDispatch();
    const {genresById, total_pages, prev, next, loading} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const id = idGenre

    useEffect(() => {
        dispatch(movieActions.getAllByGenres({id, page: query.get('page')}))
    }, [dispatch, query, idGenre])


    return (
        <div className={css.container}>

            <button className="btn btn-dark" id={css.button} disabled={!prev}
                    onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>
                <span></span> <span></span> <span></span> <span></span>Prev</button>

            <div className={css.movies}>
                {genresById.map(movie => <Movie key={movie.id} movie={movie}/>)}
                {loading && <ClipLoader color={'#1BFFFF'} loading={loading} size={150}/>}
            </div>

            <button className="btn btn-dark" id={css.button} disabled={next === total_pages + 1}
                    onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>
                <span></span> <span></span> <span></span> <span></span>Next</button>

        </div>
    );
};
export {SearchByGenre};
