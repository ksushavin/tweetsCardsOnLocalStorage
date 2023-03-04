import React from 'react';
import css from './AvatarBox.module.css';
import ellipse from '../../images/ellipse.png';
import line from '../../images/line.svg';

function AvatarBox({ avatar }) {
  return (
    <>
        <div className={css.line}>
          <img src={line}  alt="" />
        </div>
        <div className={css.avatar_wrapper}>
          <img src={avatar} className={css.avatar_pic} alt="user's avatar" />
          <img src={ellipse} className={css.ellipse} alt="avatar box frame" />
        </div>
    </>
  )
}

export default AvatarBox
