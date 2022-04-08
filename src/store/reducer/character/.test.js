import authReducer from "./index";
import { SET_FILTER, UPDATE_CHAR, GET_DADOS_FILTER, GET_DADOS } from '../../actionType';

describe("reducerLibrary", () => {
    const state = {
        filter: false,
        pageCount: 0,
        loading: true,
        bkpCharactersFilter: [],
        characters: [],
    };

    test("return default value store", () => {
        expect(authReducer(undefined, {})).toEqual(state);
    });

    test("return when SET_FILTER", () => {
        const action = { type: SET_FILTER, payload: 'teste' };

        expect(authReducer(undefined, action)).toEqual({
            ...state,
            filter: 'teste',
            characters: []
        });
    });

    test("return when GET_DADOS_FILTER", () => {
        const action = { type: GET_DADOS_FILTER, payload: [{ name: 'teste' }] };

        expect(authReducer(undefined, action)).toEqual({
            ...state,
            characters: [{ name: 'teste' }],
            filter: true,
            loading: false,
            pageCount: 1
        });
    });

    test("return when GET_DADOS", () => {
        const action = { type: GET_DADOS, payload: [{ name: 'teste' }] };

        expect(authReducer(undefined, action)).toEqual({
            ...state,
            characters: [{ name: 'teste' }],
            filter: false,
            loading: false,
            pageCount: 1
        });
    });

    test("return when UPDATE_CHAR", () => {
        const action = { type: UPDATE_CHAR, payload: [{ id: 1, name: 'teste' }] };

        state.characters = [{ id: 1, name: 'teste' }]

        expect(authReducer(undefined, action)).toEqual({
            ...state,
            characters: []
        });
    });
});
