import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { SET_FILTER, UPDATE_CHAR } from "../../actionType";
// Actions
import * as actions from "./index";

const mockStore = configureMockStore([thunk]);
const URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=af6fe4504130de33d24b21dd68baa994&limit=${30}&offset=${1}`;

const response = {
    results: [
        {
            id: 1011334,
            name: "3-D Man",
            description: "",
            modified: "2014-04-29T14:18:17-0400",
            thumbnail: {
                path: "",
                extension: "jpg"
            }
        }
    ]
}

describe("Actions test", () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            dados: {
                filter: false,
                pageCount: 0,
                bkpCharactersFilter: [],
                characters: [],
                connect2: jest.fn()
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
        const action = actions.getData(0);

        expect(action).toEqual(new Promise(() => { }));
    });

    test("Action getDataFiltered", () => {
        const action = actions.getDataFiltered('new');

        expect(action).toEqual(new Promise(() => { }));
    });
});
