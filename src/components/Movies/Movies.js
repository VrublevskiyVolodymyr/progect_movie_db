import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {Movie} from '../Movie/Movie'
import css from './movies.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";


const Movies = () => {
    const {movies, total_pages, prev, next, loading} = useSelector(state => state.movies);


    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query])

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    return (
        <div className={css.container}>

            <button className="btn btn-dark" id={css.button} disabled={!prev}
                    onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>
                <span></span> <span></span> <span></span> <span></span>Prev</button>

            <div className={css.movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                {loading && <ClipLoader color={'#1BFFFF'} loading={loading} size={150}/>}
            </div>

            <button
                className="btn btn-dark" id={css.button} disabled={next === total_pages + 1}
                onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>
                <span></span> <span></span> <span></span> <span></span>Next</button>

        </div>
    );
};
export {Movies};
