import * as ActionTypes from './ActionTypes';

//favorites state is an array of campsite id's
//DELETE_FAVORITE action has payload contains the campsite id that should be deleted
export const favorites = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        case ActionTypes.DELETE_FAVORITE:
            return state.filter(favorite => favorite !== action.payload)
        default:
            return state;

    }
};