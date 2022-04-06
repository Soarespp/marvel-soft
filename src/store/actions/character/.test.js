import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { GET_DADOS, SET_FILTER, UPDATE_CHAR, GET_DADOS_FILTER } from "../../actionType";

// Actions
import * as actions from "./index";

const mockStore = configureMockStore([thunk]);

describe("Actions test", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            dados: {
                filter: false,
                pageCount: 0,
                bkpCharactersFilter: [],
                characters: [],
            },
        });
    });

    test("Action setFilter", () => {
        const filter = { name: 'teste' };

        const action = actions.setFilter(filter);

        expect(action).toEqual({
            type: SET_FILTER,
            payload: filter,
        });
    });

    test("Action changeCharacter", () => {
        const character = { id: 1, name: 'teste' };

        const action = actions.changeCharacter(character);

        expect(action).toEqual({
            type: UPDATE_CHAR,
            payload: character,
        });
    });

    test("Action getData", () => {
        const character = { id: 1, name: 'teste' };

        const action = actions.getData(character);

        expect(action).resolves.toEqual({
            type: GET_DADOS,
            payload: character,
        });
    });

    test("Action getDataFiltered", () => {
        const character = { id: 1, name: 'teste' };

        const action = actions.getDataFiltered(character);

        expect(action).resolves.toEqual({
            type: GET_DADOS_FILTER,
            payload: character,
        });
    });

});
