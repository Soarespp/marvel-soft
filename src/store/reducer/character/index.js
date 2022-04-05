/* eslint-disable import/no-anonymous-default-export */
import { GET_DADOS, SET_FILTER, UPDATE_CHAR, GET_DADOS_FILTER } from '../../actionType';

var initialState = {
    filter: false,
    pageCount: 0,
    bkpCharactersFilter: [],
    characters: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DADOS:
            if (state.filter) {
                state.characters = state.bkpCharactersFilter
            }
            return {
                ...state,
                pageCount: [...state.characters, ...action.payload].length,
                characters: [...state.characters, ...action.payload]
            }
        case GET_DADOS_FILTER:
            return {
                ...state,
                bkpCharactersFilter: state.characters,
                pageCount: action.payload.length,
                filter: true,
                characters: action.payload
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

