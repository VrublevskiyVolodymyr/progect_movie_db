import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {imageURL} from "../../configs";
import {movieActions} from "../../redux";
import css from './movie.module.css'
import {StarRating} from "../StarRating/StarRating";

const Movie = ({movie}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id, title, backdrop_path, vote_average} = movie

    const handleClick = (movie) => {
        dispatch(movieActions.setSelectedMovie(movie))
        navigate(`/movies/${id}`)
    }

    return (

        <div className={css.movie}>

            <img className="card-img-top" src={imageURL + backdrop_path} alt={title}></img>

            <h5 className={css.text}> {title}</h5>

            {id && <StarRating key={id} vote_average={vote_average}/>}

            <button id={css.button} className="btn btn-dark" onClick={() => handleClick(movie)}>
                <span></span> <span></span> <span></span> <span></span> Vive more </button>

        </div>
    );
};

export {Movie};
