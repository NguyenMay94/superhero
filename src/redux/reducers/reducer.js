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
    case types.GET_SUPER_HEROS_BY_NAME:
      return {
        ...state,
        superHerosDisplay: action.data,
        isLoading: false,
      };
    case types.GET_SUPER_HEROS_BY_ID:
      return {
        ...state,
        superHerosDisplay: action.data,
        isLoading: false,
      };
    case types.UPDATE_FAVORITE_STATUS:
      return {
        ...state,
        superHeroListAll: action.data,
      };
    case types.GET_SUPER_HERO_DETAIL:
      return {
        ...state,
        superDetail: action.data,
        isLoading: false,
      };
    // case types.RESET_SUPER_HERO_DETAIL:
    //   return {
    //     ...state,
    //     superDetail: null,
    //   };
    // case types.RESET_FAVORITE_LIST:
    //   return {
    //     ...state,
    //     superHeroFavoriteList: [],
    //   };
    case types.ADD_NEW_SUPER_HERO:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_NEW_SUPER_HERO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.ADD_NEW_SUPER_HERO_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
