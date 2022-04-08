import React from 'react'
import { render } from "@testing-library/react";
import Home from "./index";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

describe("<Home />", () => {
    let props;

    beforeEach(() => {
        props = {
            characters: [{ id: 1, name: 'teste 1' },
            { id: 2, name: 'teste 2' }],
            loading: true,
        }

    })


    const mockStore = configureMockStore([thunk])

    const store = mockStore({
        dados: {
            filter: false,
            pageCount: 0,
            bkpCharactersFilter: [],
            characters: [],
        }
    });

    test('render component', () => {
        expect(render(<Provider store={store}><Home props={props} /></Provider>));
    })
});
