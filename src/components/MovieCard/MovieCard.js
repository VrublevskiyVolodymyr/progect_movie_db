import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {imageURL} from "../../configs";
import css from './movieCard.module.css'
import {StarRating} from "../StarRating/StarRating";
import {movieActions} from "../../redux";

const MovieCard = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {movieById, selectedMovie} = useSelector(state => state.movies);

    const movieCard = selectedMovie || movieById;

    useEffect(() => {
        dispatch(movieActions.getById({id}))
    }, [dispatch, movieById])


    return (
        <div className={css.container}>
            {movieById &&
                <div className={css.card}>

                    <h1 className={css.text} id={css.title}> {movieCard.title}</h1>

                    <div className={css.img_block}>

                        <img id={css.img} className="card-img-top" src={imageURL + movieCard.backdrop_path} alt={movieById.title}></img>

                        <div className={css.details}>
                            <div>
                                {movieById.genres.map(genre => <span className="badge bg-secondary text-dark">{genre.name}</span>)}
                            </div>
                            <h6>Popularity: {movieById.popularity}</h6>
                            <h6> Release date: {movieById.release_date}</h6>
                            <h6>Budget: {movieById.budget}$</h6>
                            <h6>Runtime: {movieById.runtime}min</h6>
                            <StarRating key={id} vote_average={movieById.vote_average}/>
                        </div>

                    </div>

                    <div className={css.body_card}>
                        <h4 className={css.text}>Overview</h4>
                        <p> {movieById.overview}</p>
                        <h4 className={css.text}>Tagline</h4>
                        <p>{movieById.tagline}</p>
                    </div>

                    <hr/>

                    <button className="btn btn-dark" id={css.button} onClick={() => navigate(-1)}>
                        <span></span> <span></span> <span></span> <span></span> Back </button>

                </div>
            }
        </div>
    );
};

export {MovieCard};
