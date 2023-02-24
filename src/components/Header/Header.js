import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";

import css from './header.module.css'
import {titleValidator} from "../../validators";
import {DropMenu} from '../DropMenu/DropMenu'
import {Themes} from "../Themes/Themes";

const Header = () => {

    const navigate = useNavigate();

    const {register, handleSubmit, reset, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(titleValidator)
    })

    const searchClick = async (title) => {
        navigate(`/search_movie/${title.title}?page=1`)
        reset()
    }

    return (
        <div className={css.header}>

            <div className={css.nav}>
                <NavLink to={'movies?page=1'}><h5 className={css.movies}>Movies</h5></NavLink>
                <DropMenu/>
            </div>

            <div className={css.form}>

                <form className="d-flex" onSubmit={handleSubmit(searchClick)}>
                    <input className={css.input} type={"text"} placeholder={'Movie search'} {...register('title')}/>
                    <button className="btn btn-dark" id={css.button} disabled={!isValid}>
                        <span></span> <span></span> <span></span> <span></span>Search</button>
                </form>

                <Themes/>

                <div className={css.user}>User</div>
            </div>

        </div>
    );
};

export {Header};
