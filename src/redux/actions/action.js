import * as types from "./actionTypes";
import axios from "../../utils/axios";

/**
 * ACTION SEARCH SUPER HERO LIST
 */

export const searchSuperHeroById = (id, typeFilter) => {
  return {
    type: types.GET_SUPER_HEROS_BY_ID,
    params: {
      id,
      typeFilter,
    },
  };
};

export const searchSuperHeroByName = (name, typeFilter) => {
  return {
    type: types.GET_SUPER_HEROS_BY_NAME,
    params: {
      name,
      typeFilter,
    },
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

export const getSuperHeroDetail = (id) => {
  return {
    type: types.GET_SUPER_HERO_DETAIL,
    params: {
      id,
    },
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

export const updateFavoriteStatus = (id, isFavorite) => {
  return {
    type: types.UPDATE_FAVORITE_STATUS,
    params: {
      id,
      isFavorite,
    },
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

export const addNewSuperHero = (params) => {
  return {
    type: types.ADD_NEW_SUPER_HERO,
    params,
  };
};

export const submitDataNewSuperHero = (params, callback) => {
  return (dispatch) => {
    dispatch(addNewSuperHero(params));
    callback();
  };
};
