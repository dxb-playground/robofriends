import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

it('expects to render the Card component', () => {
  let component = shallow(<Card />);

  expect(component.length).toEqual(1);
});
