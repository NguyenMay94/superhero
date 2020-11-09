import * as types from "./actionTypes";
import axios from "../../utils/axios";

/**
 * ACTION SEARCH SUPER HERO LIST
 */

export const searchSuperHeroById = (listAll, id, typeFilter) => {
  const newSuperHeros = listAll.filter((item) => {
    if (typeFilter === "favorite") {
      return item.id === id && item.isFavorite === true;
    }
    return item.id === id;
  });
  return {
    type: types.GET_SUPER_HEROS_BY_ID,
    data: newSuperHeros,
  };
};

export const searchSuperHeroByName = (listAll, name, typeFilter) => {
  const newSuperHeros = listAll.filter((item) => {
    if (typeFilter === "favorite") {
      return item.name.indexOf(name) >= 0 && item.isFavorite === true;
    }
    return item.name.indexOf(name) >= 0;
  });
  return {
    type: types.GET_SUPER_HEROS_BY_NAME,
    data: newSuperHeros,
  };
};

/**
 * ACTION SEARCH SUPER HERO LIST
 */

export const startGetAllSuperHeros = () => {
  return {
    type: types.GET_ALL_SUPER_HEROS,
  };
};

export const getAllSuperHerosSuccess = (data) => {
  return {
    type: types.GET_ALL_SUPER_HEROS_SUCCESS,
    data,
  };
};

export const getAllSuperHerosFailt = (error) => {
  return {
    type: types.GET_ALL_SUPER_HEROS_FAILED,
    error,
  };
};

export const getAllSuperHero = () => {
  return (dispatch) => {
    dispatch(startGetAllSuperHeros());
    axios
      .get("all.json")
      .then((response) => {
        if (response.status === 200) {
          dispatch(getAllSuperHerosSuccess(response.data || []));
        } else {
          dispatch(getAllSuperHerosFailt(response.statusText));
        }
      })
      .catch((error) => {
        dispatch(getAllSuperHerosFailt(error));
      });
  };
};

/**
 * ACTION GET SUPER HERO DETAIL
 */

export const getSuperHeroDetail = (listAll, id) => {
  const newSuperHero = listAll.filter((item) => item.id === id);
  return {
    type: types.GET_SUPER_HERO_DETAIL,
    data: newSuperHero.length > 0 ? newSuperHero[0] : null,
  };
};

// export const resetSuperDetail = () => {
//   return {
//     type: types.RESET_SUPER_HERO_DETAIL,
//   };
// };

/**
 * ACTION UPDATE SUPER HERO FAVORITE
 */

export const updateFavoriteStatus = (id, isFavorite, listAll) => {
  const newListAll = listAll.map((item) => {
    if (item.id !== id) {
      return item;
    }

    return {
      ...item,
      isFavorite,
    };
  });

  return {
    type: types.UPDATE_FAVORITE_STATUS,
    data: newListAll,
  };
};

export const resetFavoritList = () => {
  return {
    type: types.RESET_FAVORITE_LIST,
  };
};

/**
 * ACTION ADD NEW SUPER HERO
 */

export const startAddNewSuperHero = () => {
  return {
    type: types.ADD_NEW_SUPER_HERO,
  };
};

export const addNewSuperHero = (params, callback) => {
  return (dispatch) => {
    dispatch(startAddNewSuperHero());
    callback();
  };
};
