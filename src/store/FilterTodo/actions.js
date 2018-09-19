import * as todoTypes from '../Todo/actionTypes';
import * as types from './actionTypes';

export function changeFilter(newFilter) {
    // return async (dispatch, getState) => {

    //     dispatch({
    //         type: types.CHANGE_FILTER,
    //         filter: newFilter
    //     });
    //     dispatch({
    //         type: todoTypes.FILTER_CHANGED,
    //         filter: newFilter
    //     });
    // }
    return dispatch => {
        dispatch({
            type: types.CHANGE_FILTER,
            filter: newFilter
        });
        dispatch({
            type: todoTypes.FILTER_CHANGED,
            filter: newFilter
        });
    }
}