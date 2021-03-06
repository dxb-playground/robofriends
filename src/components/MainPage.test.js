import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import MainPage from './MainPage';

describe('MainPage', () => {
  let wrapper;

  beforeEach(() => {
    let mock_props = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false,
    };
    wrapper = shallow(<MainPage {...mock_props} />);
  });

  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('does not show robots when no match is found', () => {
    let mock_props = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'Jon',
          email: 'jon@gmail.com',
        }
      ],
      searchField: 'a',
      isPending: false,
    };

    let wrapper = shallow(<MainPage {...mock_props} />);

    expect(wrapper.instance().filterRobots([])).toEqual([]);
  });

  it('shows robots when a match is found', () => {
    let mock_props = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'Jon',
          email: 'jon@gmail.com',
        }
      ],
      searchField: 'jon',
      isPending: false,
    };

    let wrapper = shallow(<MainPage {...mock_props} />);

    expect(wrapper.instance().filterRobots([])).toEqual([
      {
        id: 3,
        name: 'Jon',
        email: 'jon@gmail.com',
      }
    ]);
  });
});
