import React from 'react';
import data from '../../users.json';
import TweetsBox from '../TweetsBox/TweetsBox';
import AvatarBox from '../AvatarBox/AvatarBox';
import Header from '../Header/Header';
import CardPicture from '../CardPicture/CardPicture';
import css from './CardList.module.css';

function CardList() {
    const cards = data.users.map((item) => {

        const { id, user, avatarUrl, tweets, followers } = item;

        return (
            <li key={id} className={css.card}>
                <Header />
                <CardPicture />
                <AvatarBox avatar={avatarUrl}/>
                <TweetsBox
                    id={id}
                    user={user}
                    tweets={tweets}
                    followers={followers}
                />
            </li>
        )
    })
    return (
        <ul className={css.card_list}>{cards}</ul>
    )
}

export default CardList
