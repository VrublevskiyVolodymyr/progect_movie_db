import React from 'react';

import css from './star.module.css'

const StarRating = ({vote_average}) => {

    const setWidth= (d)=>{
        return {width: d*16.5}
    }

    return (
        <div className={css.rating}>

            <div className={css.rating_body}>

                <div className={css.rating_active}  style={setWidth(vote_average)} ></div>

                <div className={css.rating_items}>
                    <input type={'radio'} className={css.rating_item} value={'1'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'2'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'3'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'4'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'5'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'6'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'7'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'8'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'9'} name={'rating'} ></input>
                    <input type={'radio'} className={css.rating_item} value={'10'} name={'rating'} ></input>
                </div>

            </div>

            <div className={'rating_value'}>{vote_average}</div>

        </div>

    );
};

export {StarRating};
