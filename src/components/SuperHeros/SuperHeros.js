import React from "react";
import SuperHero from "./SuperHero/SuperHero";

const SuperHeros = (props) => {
  const { superHeroList, updateStatusFavorite, isLoading, typeFilter } = props;
  const listSupers =
    superHeroList && superHeroList.length > 0 ? (
      superHeroList.map((item) => (
        <SuperHero
          key={item.id}
          superHero={item}
          updateStatusFavorite={updateStatusFavorite}
        />
      ))
    ) : !isLoading ? (
      <p className="text-center message-error">
        {typeFilter !== "favorite"
          ? "Can't not find any data"
          : "You have no favourite heroes!"}
      </p>
    ) : (
      ""
    );
  return <div className="row super-hero-list">{listSupers}</div>;
};

export default SuperHeros;
