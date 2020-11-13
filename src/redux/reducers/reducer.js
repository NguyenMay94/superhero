import * as types from "../actions/actionTypes";

const initalState = {
  isLoading: false,
  superHeroListAll: [],
  superHerosDisplay: [],
  superDetail: null,
  error: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_ALL_SUPER_HEROS:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_SUPER_HEROS_SUCCESS:
      return {
        ...state,
        superHeroListAll: action.data,
        isLoading: false,
      };
    case types.GET_ALL_SUPER_HEROS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case types.GET_SUPER_HEROS:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SUPER_HEROS_BY_NAME:
      const superHerosByName = state.superHeroListAll.filter((item) => {
        if (action.params.typeFilter === "favorite") {
          return (
            (item.name.indexOf(action.params.name) >= 0 ||
              (item.biography &&
                item.biography.fullName &&
                item.biography.fullName.indexOf(action.params.name) >= 0)) &&
            item.isFavorite === true
          );
        }
        return (
          item.name.indexOf(action.params.name) >= 0 ||
          (item.biography &&
            item.biography.fullName &&
            item.biography.fullName.indexOf(action.params.name) >= 0)
        );
      });

      return {
        ...state,
        superHerosDisplay: superHerosByName,
        isLoading: false,
      };
    case types.GET_SUPER_HEROS_BY_ID:
      const superHerosById = state.superHeroListAll.filter((item) => {
        if (action.params.typeFilter === "favorite") {
          return item.id === +action.params.id && item.isFavorite === true;
        }
        return item.id === +action.params.id;
      });

      return {
        ...state,
        superHerosDisplay: superHerosById,
        isLoading: false,
      };
    case types.UPDATE_FAVORITE_STATUS:
      const newSuperHeroListAll = state.superHeroListAll.map((item) => {
        if (item.id !== action.params.id) {
          return item;
        }

        return {
          ...item,
          isFavorite: action.params.isFavorite,
        };
      });

      return {
        ...state,
        superHeroListAll: newSuperHeroListAll,
      };
    case types.GET_SUPER_HERO_DETAIL:
      const superHeroDetail = state.superHeroListAll.filter(
        (item) => item.id === action.params.id,
      );

      return {
        ...state,
        superDetail: superHeroDetail[0],
        isLoading: false,
      };
    case types.ADD_NEW_SUPER_HERO:
      return {
        ...state,
        superHeroListAll: [action.params, ...state.superHeroListAll],
      };
    default:
      return state;
  }
};

export default reducer;
