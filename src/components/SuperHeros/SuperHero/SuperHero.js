import React, { useState } from 'react';
import '../../../asset/sass/components/super-hero-box.scss';
import { useHistory } from 'react-router-dom';

const SuperHero = (props) => {
    const history = useHistory();
    const {superHero, removeFavorite, addFavorite } = props;
    const {image: {url}, biography, id,} = superHero;
    const [isLike, setIsLike] = useState(false);

    const onHeart = (event) => {
        event.preventDefault();
        const newIsLike = !isLike;
        if(newIsLike) {
            addFavorite(superHero);
        } else {
            removeFavorite(id);
        }
        setIsLike(newIsLike);
        event.stopPropagation();
    }

    const onClickSuperHero = (id) => {
        history.push(`/detail/${id}`);
    }

    return(
        <div className="col-1-of-4 super-hero-box-section">
            <div className="super-hero-box" onClick={() => onClickSuperHero(id)}>
                <i className={`super-hero-box__icon icon ${isLike ? 'icon-like': 'icon-unlike'}`} onClick={(event) => onHeart(event)}/>
                <img src={url} className="super-hero-box__image" alt={biography["full-name"]}/>
                <h3 className="super-hero-tertiary u-margin-bottom-small">{biography["full-name"]}</h3>
            </div>
        </div>
    )
}

export default SuperHero;