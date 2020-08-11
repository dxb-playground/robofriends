import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expects to render the CardList component', () => {
  let robots = [
    {
      id: 1,
      name: 'Jon Snow',
      username: 'JonJon',
      email: 'jon@gmail.com',
    }
  ];

  let component = shallow(<CardList robots={robots}/>);

  expect(component).toMatchSnapshot();
});
