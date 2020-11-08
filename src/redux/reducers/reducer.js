import * as types from '../actions/actionTypes';

const initalState = {
    isLoading: false,
    superHeroList: [],
    superHeroFavoriteList: [],
    superDetail: null,
    error: null
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SEARCH_SUPER_HERO:
            return {
                ...state,
                isLoading: true,
            };
        case types.SEARCH_SUPER_HERO_SUCCESS:
            return {
                ...state,
                superHeroList: action.data,
                isLoading: false,
            };
        case types.SEARCH_SUPER_HERO_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            }
        case types.SUPER_HERO_DETAIL:
            return {
                ...state,
                isLoading: true,
            };
        case types.SUPER_HERO_DETAIL_SUCCESS:
            return {
                ...state,
                superDetail: action.data,
                isLoading: false,
            };
        case types.SUPER_HERO_DETAIL_FAILT:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        case types.UPDATE_FAVORITE_LIST:
            return {
                ...state,
                superHeroFavoriteList: action.data,
            };
        case types.RESET_SUPER_HERO_DETAIL: 
            return {
                ...state,
                superDetail: null
            }
        case types.RESET_FAVORITE_LIST: 
            return {
                ...state,
                superHeroFavoriteList: []
            };
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
}

export default reducer;