import DetailCharacter from "./DetailCharacter";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<DetailCharacter />", () => {
    let props;
    const mockStore = configureMockStore([thunk])
    beforeEach(() => {
        props = {
            characters: [{ id: 1, name: 'teste' }],
            idCharacter: 1,
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

    afterEach(() => {
        jest.clearAllMocks;
    })

    it('renders', () => {
        const wrapper = shallow(<Provider store={store}><DetailCharacter {...props} /></Provider>);
        expect(wrapper).toBeTruthy();
    });
});
