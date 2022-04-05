/* eslint-disable import/no-anonymous-default-export */
import { GET_DADOS, SET_FILTER, UPDATE_CHAR } from '../../actionType';

var initialState = {
    filter: "",
    pageCount: 0,
    characters: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DADOS:
            return {
                ...state,
                pageCount: [...state.characters, ...action.payload].length,
                characters: [...state.characters, ...action.payload]
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case UPDATE_CHAR:
            return {
                ...state,
                characters: [
                    ...state.characters.filter((char) => char.id !== action.payload.id),
                    action.payload]
            }
        default:
            return state
    }
}

