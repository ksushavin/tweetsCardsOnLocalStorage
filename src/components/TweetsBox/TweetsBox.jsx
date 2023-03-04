import { React, useState, useEffect  } from 'react';
import AddFollowingBtn from '../Button/AddFollowingBtn';
import RemoveFollowingBtn from '../Button/RemoveFollowingBtn';
import css from './TweetsBox.module.css';



function TweetsBox({id, user, tweets, followers}) {

  const initialState = {
    followersCount: followers,
    isFollowing: false
  }

  const [followersCount, setFollowersCount] = useState(JSON.parse(window.localStorage.getItem(id)) ?? initialState.followersCount);
  const [isFollowing, setIsFollowing] = useState(JSON.parse(window.localStorage.getItem(user)) ?? initialState.isFollowing);

  useEffect(() => {
    if (!followersCount && !isFollowing) {
        return
    }
    window.localStorage.setItem(id, JSON.stringify(followersCount));
    window.localStorage.setItem(user, JSON.stringify(isFollowing));
    }, [followersCount, isFollowing, id, user]
  );
  

  const handleFollowersAdd = () => {
    setFollowersCount(followersCount + 1);
    setIsFollowing(true)
  }

  const handleFollowersRemove = () => {
    setFollowersCount(followersCount - 1);
    setIsFollowing(false)
  }

  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={css.text_box}>
      <h1 className={css.user}>{user}</h1>
      <p className={css.tweets}>{tweets}</p>
      <p className={css.followers_count}>{numberWithSpaces(followersCount)}</p>

      {!isFollowing ? <AddFollowingBtn onClick={handleFollowersAdd} /> : <RemoveFollowingBtn onClick={handleFollowersRemove}/> }
    </div>
  )
}

export default TweetsBox

