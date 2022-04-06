import React, { render } from "@testing-library/react";
import Header from "./index";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

describe("<Header />", () => {
    let props

    props = {
        filter: 'teste filter',
        getDataFiltered: jest.fn(() => { }),
        // seacher
    }

    const mockStore = configureMockStore([thunk])

    const store = mockStore({
        name: 'teste mock'
    });

    test('render component', () => {
        expect(render(<Provider store={store}><Header {...props} /></Provider>));
    })
});