import React from "react";
import SuperHero from "./SuperHero/SuperHero";

const SuperHeros = (props) => {
  const { superHeroList, updateStatusFavorite } = props;
  const listSupers =
    superHeroList && superHeroList.length > 0 ? (
      superHeroList.map((item) => (
        <SuperHero
          key={item.id}
          superHero={item}
          updateStatusFavorite={updateStatusFavorite}
        />
      ))
    ) : (
      <p className="text-center message-error">Can't not find any data</p>
    );
  return <div className="row super-hero-list">{listSupers}</div>;
};

export default SuperHeros;
