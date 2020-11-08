import React from 'react';
import SuperHero from "./SuperHero/SuperHero";

const SuperHeros = (props) => {
    const {superHeroList, removeFavorite, addFavorite } = props;
    const listSupers = superHeroList && superHeroList.length > 0 ? (
        superHeroList.map(item => <SuperHero key={item.id} superHero={item}  removeFavorite={removeFavorite} addFavorite={addFavorite}/>)
    ): (
        <p className="text-center">Can't not find any data</p>
    )
    return (
        <div className="row super-hero-list">
            { listSupers }
        </div>
    );
}

export default SuperHeros;