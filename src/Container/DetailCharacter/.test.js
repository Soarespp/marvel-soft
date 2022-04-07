import React, { render, fireEvent } from "@testing-library/react";
import DetailCharacter from "./index";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { useParams } from 'react-router-dom';

import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe("<DetailCharacter />", () => {
    let props;
    const mockStore = configureMockStore([thunk])
    beforeEach(() => {
        props = {
            characters: [],
            idCharacter: 1,
        }
        // jest.mock('react-router-dom', () => ({
        //     useParams: jest.fn().mockReturnValue({ idCharacter: 1 }),
        // }));
    })

    const store = mockStore({
        dados: {
            filter: false,
            pageCount: 0,
            bkpCharactersFilter: [],
            characters: [],
        }
    });

    afterEach(() => {
        jest.clearAllMocks;
    })

    it('renders', () => {
        const wrapper = shallow(<DetailCharacter store={store} {...props} />);
        expect(wrapper).toBeTruthy();
    });

    // test('render component', async () => {
    //     jest.mock("react-router-dom", () => ({
    //         ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
    //         useParams: () => ({
    //             idCharacter: -1
    //         })
    //     }));
    //     expect(render(<Provider store={store}><DetailCharacter {...props} /></Provider>));
    // })
});
