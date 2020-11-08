import * as types from './actionTypes';
import axios from '../../utils/axios';

/**
 * ACTION SEARCH SUPER HERO LIST
*/

export const startSearch = () => {
    return {
        type: types.SEARCH_SUPER_HERO,
    }
}

export const searchSuperHeroSuccess = (data) => {
    return {
        type: types.SEARCH_SUPER_HERO_SUCCESS,
        data
    }
}

export const searchSuperHeroFailt = (error) => {
    return {
        type: types.SEARCH_SUPER_HERO_FAILED,
        error
    }
}

export const searchSuperHero = (param) => {
    return dispatch => {
        dispatch(startSearch());
        const urlRequest = param.type === 'name' ? '/search': '';
        axios.get(`${urlRequest}/${param.value}`).then(response => {
            if(response.data.response === "success") {
                const newData = response.data.results? response.data.results: [response.data];
                dispatch(searchSuperHeroSuccess(newData));
                dispatch(resetFavoritList())
            } else {
                dispatch(searchSuperHeroFailt(response.data));
            }
            
        }).catch(error => {
            dispatch(searchSuperHeroFailt(error));
        })
    }
}

export const startGetSuperDetail = () => {
    return {
        type: types.SUPER_HERO_DETAIL,
    }
}

export const getSuperDetailSuccess = (data) => {
    return {
        type: types.SUPER_HERO_DETAIL_SUCCESS,
        data
    }
}

export const getSuperDetailFailt = (error) => {
    return {
        type: types.SUPER_HERO_DETAIL_FAILT,
        error
    }
}

/**
 * ACTION GET SUPER HERO DETAIL
*/

export const getSuperDetail = (id) => {
    return dispatch => {
        dispatch(startGetSuperDetail());
        axios.get(`/${id}`).then(response => {
            if(response.data.response === "success") {
                const newData = response.data;
                dispatch(getSuperDetailSuccess(newData));
            } else {
                dispatch(getSuperDetailFailt(response.data));
            }
        }).catch(error => {
            dispatch(getSuperDetailFailt(error));
        })
    }
}

export const resetSuperDetail = () => {
    return {
        type: types.RESET_SUPER_HERO_DETAIL,
    }
}

/**
 * ACTION UPDATE SUPER HERO FAVORITE
*/

export const updateFavoritList = (data) => {
    return {
        type: types.UPDATE_FAVORITE_LIST,
        data
    }
}


export const resetFavoritList = () => {
    return {
        type: types.RESET_FAVORITE_LIST,
    }
}

/**
 * ACTION ADD NEW SUPER HERO
*/

export const startAddNewSuperHero = () => {
    return {
        type: types.ADD_NEW_SUPER_HERO
    }
}

export const addNewSuperHero = (params, callback) => {
    return dispatch => {
        dispatch(startAddNewSuperHero());
        callback();
    }
}