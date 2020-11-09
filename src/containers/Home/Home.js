import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFavoriteStatus,
  searchSuperHeroById,
  searchSuperHeroByName,
} from "../../redux/actions/action";
import Banner from "../../components/Banner/Banner";
import SuperHeros from "../../components/SuperHeros/SuperHeros";

const Home = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const superHeroListAll = useSelector((state) => state.superHeroListAll);
  const superHerosDisplay = useSelector((state) => state.superHerosDisplay);
  const [typeFilter, setTypeFilter] = useState("all");
  const [typeSearch, setTypeSearch] = useState("name");
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    if (typeSearch === "name") {
      dispatch(searchSuperHeroByName(superHeroListAll, textSearch, typeFilter));
    } else {
      dispatch(searchSuperHeroById(superHeroListAll, textSearch, typeFilter));
    }
  }, [dispatch, textSearch, typeFilter, superHeroListAll]);

  const updateFilter = (value) => {
    setTypeFilter(value);
  };

  const onUpdateStatusFavorite = (id, isFavorite) => {
    dispatch(updateFavoriteStatus(id, isFavorite, superHeroListAll));
  };

  const updateTypeSearch = (type) => {
    setTypeSearch(type);
  };

  const onSearchSuperHero = (value) => {
    if (typeSearch === "name") {
      searchSuperHeroByName(superHeroListAll, value, typeFilter);
    } else {
      searchSuperHeroById(superHeroListAll, value, typeFilter);
    }

    setTextSearch(value);
  };

  console.log("-----------------------------");
  console.log(superHeroListAll);

  return (
    <Spin spinning={isLoading}>
      <div className="home-page">
        <Banner
          updateFilter={updateFilter}
          onSearchSuperHero={onSearchSuperHero}
          typeSearch={typeSearch}
          textSearch={textSearch}
          updateTypeSearch={updateTypeSearch}
        />
        <SuperHeros
          superHeroList={superHerosDisplay}
          updateStatusFavorite={onUpdateStatusFavorite}
        />
      </div>
    </Spin>
  );
};

export default Home;
