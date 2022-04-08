import React, { render } from "@testing-library/react";
import { createMemoryHistory } from 'history'
import DetailCharacter from "./index";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<DetailCharacter />", () => {
    let props;
    const mockStore = configureMockStore([thunk])
    beforeEach(() => {
        props = {
            characters: [],
            idCharacter: 1,
        }
        jest.mock('react-router-dom', () => ({
            useParams: jest.fn().mockReturnValue({ idCharacter: 1 }),
        }));
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
    // jest.mock("react-router-dom", () => ({
    //     ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
    //     useParams: () => ({
    //         idCharacter: -1
    //     })
    // }));

    // const history = createMemoryHistory()
    // const route = '/character/:idCharacter'
    // history.push(route)
    // expect(render(<Provider store={store}>
    //     <Router history={history}>
    //         <DetailCharacter {...props} />
    //     </Router>
    // </Provider >))
    // render(
    //     <Provider store={store}>
    //         <Router history={history}>
    //             <DetailCharacter {...props} />
    //         </Router>
    //     </Provider>,
    // )

    // expect(render(<Provider store={store}><DetailCharacter {...props} /></Provider>));
    // })
});
