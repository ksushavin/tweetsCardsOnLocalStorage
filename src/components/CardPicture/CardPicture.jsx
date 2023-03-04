import React from 'react';
import picture from '../../images/picture.png';
import css from './CardPicture.module.css'

function CardPicture() {
  return (
    <div className={css.picture}>
        <img src={picture}  alt="" />
    </div>
  )
}

export default CardPicture
