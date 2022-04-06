import React, { render, fireEvent } from "@testing-library/react";
import DetailCharacter from "./index";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MatchMediaMock from 'jest-matchmedia-mock';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe("<DetailCharacter />", () => {
    let props;
    const mockStore = configureMockStore([thunk])
    beforeEach(() => {
        props = {
            characters: [],
            idCharacter: 1
        }

    })

    const store = mockStore({
        dados: {
            filter: false,
            pageCount: 0,
            bkpCharactersFilter: [],
            characters: [],
        }
    });

    jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ idCharacter: 1 }),
    }));

    it('renders', () => {
        const wrapper = shallow(<DetailCharacter store={store} {...props} />);
        expect(wrapper).toBeTruthy();
    });
});
