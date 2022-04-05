/* eslint-disable import/no-anonymous-default-export */
import { GET_DADOS, SET_FILTER, UPDATE_CHAR } from '../../actionType';

var initialState = {
    filter: "",
    characters: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DADOS:
            return {
                ...state,
                characters: action.payload
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case UPDATE_CHAR:
            console.log('action.payload', action.payload)
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

