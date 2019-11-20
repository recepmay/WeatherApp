import {
    GET_ITEM_INDEX,
    SET_ITEM_INDEX,
    SET_ITEM
} from '../ActionTypes';

const initialState = {
    index: 0,
    item: []
};

export function carousel(state = initialState, action) {
    switch (action.type) {
        case GET_ITEM_INDEX:
            return {
                ...state
            };
        case SET_ITEM_INDEX:
            return {
                ...state,
                index: action.index
            };
        case SET_ITEM:
            return {
                ...state,
                item: action.item
            };
        default:
            return state;
    }
}

export default carousel;
