import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAllSuperHero } from "../../redux/actions/action";
import Home from "../Home";
import NewSuperHero from "../NewSuperHero";
import SuperHeroDetail from "../SuperHeroDetail";

const ContentRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSuperHero());
  }, [dispatch]);
  return (
    <Switch>
      <Route exact={true} path="/new" component={NewSuperHero}></Route>
      <Route
        exact={true}
        path="/detail/:id"
        component={SuperHeroDetail}
      ></Route>
      <Route exact={true} path="/" component={Home}></Route>
    </Switch>
  );
};

export default ContentRouter;
