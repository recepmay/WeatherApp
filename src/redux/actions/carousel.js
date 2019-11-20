import * as types from '../ActionTypes';

export const getActiveItemIndexAct = () => ({
    type: types.GET_ITEM_INDEX
});

export const setActiveItemIndexAct = index => ({
    type: types.SET_ITEM_INDEX,
    index: index
});

export const setSelectedItemAct = item => ({
    type: types.SET_ITEM,
    item: item
});