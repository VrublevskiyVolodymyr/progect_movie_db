import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import css from './menu.module.css'

const DropMenu = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const searchClick = (idGenre, nameGenre) => {
        navigate(`/search_movie_by_genre/${idGenre}/${nameGenre}?page=1`);
    }

    return (

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <h5 className={css.genres}>Genre</h5>

            {isOpen && (
                <ul className={css.menu}>

                    <li className={css.genre} onClick={() => searchClick(28, 'action')}></li>
                    <li className={css.genre} onClick={() => searchClick(12, 'adventure')}>Adventure</li>
                    <li className={css.genre} onClick={() => searchClick(16, 'animation')}>Animation</li>
                    <li className={css.genre} onClick={() => searchClick(35, 'comedy')}>Comedy</li>
                    <li className={css.genre} onClick={() => searchClick(80, 'crime')}>Crime</li>
                    <li className={css.genre} onClick={() => searchClick(99, 'documentary')}>Documentary</li>
                    <li className={css.genre} onClick={() => searchClick(18, 'drama')}>Drama</li>
                    <li className={css.genre} onClick={() => searchClick(10751, 'family')}>Family</li>
                    <li className={css.genre} onClick={() => searchClick(14, 'fantasy')}>Fantasy</li>
                    <li className={css.genre} onClick={() => searchClick(36, 'history')}>History</li>
                    <li className={css.genre} onClick={() => searchClick(27, 'horror')}>Horror</li>
                    <li className={css.genre} onClick={() => searchClick(10402, 'music')}>Music</li>
                    <li className={css.genre} onClick={() => searchClick(9648, 'mystery')}>Mystery</li>
                    <li className={css.genre} onClick={() => searchClick(10749, 'romance')}>Romance</li>
                    <li className={css.genre} onClick={() => searchClick(878, 'science fiction')}>Science Fiction</li>
                    <li className={css.genre} onClick={() => searchClick(10770, 'tv movie')}>TV Movie</li>
                    <li className={css.genre} onClick={() => searchClick(53, 'thriller')}>Thriller</li>
                    <li className={css.genre} onClick={() => searchClick(10752, 'war')}>War</li>
                    <li className={css.genre} onClick={() => searchClick(37, 'western')}>Western</li>

                </ul>

            )}
        </div>
    );
};

export {DropMenu};
