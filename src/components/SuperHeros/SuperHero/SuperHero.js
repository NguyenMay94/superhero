import React, { useState } from "react";
import "../../../asset/sass/components/super-hero-box.scss";
import { useHistory } from "react-router-dom";

const SuperHero = (props) => {
  const history = useHistory();
  const { superHero, updateStatusFavorite } = props;
  const {
    images: { md },
    biography,
    id,
    isFavorite,
    name,
  } = superHero;
  const [isLike, setIsLike] = useState(isFavorite ? true : false);

  const onHeart = (event) => {
    event.preventDefault();
    const newIsLike = !isLike;
    updateStatusFavorite(id, newIsLike);
    setIsLike(newIsLike);
    event.stopPropagation();
  };

  const onClickSuperHero = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <div className="col-1-of-5 super-hero-box-section">
      <div className="super-hero-box" onClick={() => onClickSuperHero(id)}>
        <span className="super-hero-box__icon">
          <i
            className={`icon ${isLike ? "icon-like" : "icon-unlike"}`}
            onClick={(event) => onHeart(event)}
          />
        </span>
        <img
          src={md}
          className="super-hero-box__image"
          alt={biography.fullName}
        />
        <h4 className="super-hero-tertiary u-margin-bottom-small">
          {name || biography.fullName}
        </h4>
      </div>
    </div>
  );
};

export default SuperHero;
