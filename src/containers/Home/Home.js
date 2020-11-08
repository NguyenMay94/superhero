import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { searchSuperHero, updateFavoritList } from '../../redux/actions/action';
import Banner from '../../components/Banner/Banner';
import SuperHeros from '../../components/SuperHeros/SuperHeros';

const Home = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const superHeroList = useSelector(state => state.superHeroList);
    const superHeroFavoriteList = useSelector(state => state.superHeroFavoriteList);
    const [typeFilter, setTypeFavorite] = useState("all");

    useEffect(() => {
        dispatch(searchSuperHero({type: "name", value: "batman"}));
    }, [dispatch, ]);

    const updateFavorite = (value) => {
        setTypeFavorite(value);
    }

    const addSuperFavoriteList = (superHero) => {
        const newFavoriteList = [...superHeroFavoriteList]
        newFavoriteList.push(superHero);
        dispatch(updateFavoritList(newFavoriteList));

    }

    const removeSuperFavoriteList = (superHeroId) => {
        const newFavoriteList =  superHeroFavoriteList.filter(item => item.id !== superHeroId);
        dispatch(updateFavoritList(newFavoriteList));
    }

    return (
        <Spin spinning={isLoading}>
            <div className='home-page'>
                <Banner updateFavorite={updateFavorite}/>
                <SuperHeros 
                    superHeroList={typeFilter === "favorite" ? superHeroFavoriteList : superHeroList}
                    removeFavorite={removeSuperFavoriteList}
                    addFavorite={addSuperFavoriteList}
                />
            </div>
        </Spin>
    );
}



export default Home;