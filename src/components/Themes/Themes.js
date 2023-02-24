import React from 'react';

import {useTheme} from "../../hooks";
import css from './themes.module.css'

const Themes = () => {

    const { theme, setTheme } = useTheme('dark')

    const handleLightThemeClick = () => {
        setTheme('light')
    }

    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    return (

        <div className="p-3 d-flex justify-content-end">

            <button className="btn btn-dark" id={css.button} onClick={handleLightThemeClick}>
                <span></span>  <span></span>  <span></span>  <span></span>Light</button>

            <button className="btn btn-dark"  id={css.button} onClick={handleDarkThemeClick}>
                <span></span>  <span></span>  <span></span>  <span></span>Dark</button>

        </div>
    )
}
export {Themes};
