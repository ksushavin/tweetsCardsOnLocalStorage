import React from 'react';
import css from './btn.module.css'

function AddFollowingBtn({onClick}) {
  return (
    <button
      type='button'
      className={css.btn}
      onClick={onClick}
    >Follow</button>
  )
}

export default AddFollowingBtn

