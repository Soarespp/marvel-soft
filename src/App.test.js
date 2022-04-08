import React from "@testing-library/react";
import App from "./App";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  const mockStore = configureMockStore([thunk])

  const store = mockStore({
    dados: {
      filter: false,
      pageCount: 0,
      bkpCharactersFilter: [],
      characters: [],
    }
  });

  jest.mock('react-router-dom', () => ({
    componentDidMount: jest.fn().mockReturnValue({ id: '123' }),
  }));

  it('renders', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper).toBeTruthy();
  });
});
