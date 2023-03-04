import React from 'react';
import css from './btn.module.css'

function RemoveFollowingBtn({onClick}) {
  return (
    <button
      type='button'
      className={`${css.btn} ${css.btn_remove}`}
      onClick={onClick}
    
    >Following</button>
  )
}

export default RemoveFollowingBtn