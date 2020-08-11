import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('expects to render the Card component', () => {
  let component = shallow(<Card />);

  expect(component).toMatchSnapshot();
});
