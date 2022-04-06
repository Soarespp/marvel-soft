import React, { render } from "@testing-library/react";
import Home from "./index";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MatchMediaMock from 'jest-matchmedia-mock';

describe("<Home />", () => {
    let props;
    let matchMedia;

    beforeEach(() => {
        props = {
            characters: [],
        }

    })

    beforeAll(() => {
        matchMedia = new MatchMediaMock();
    });

    afterEach(() => {
        matchMedia.clear();
    });

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
        expect(render(<Provider store={store}><Home {...props} /></Provider>));
    })
});
