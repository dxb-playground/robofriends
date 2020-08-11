import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('expects to render the CounterButton component', () => {
  let component = shallow(<CounterButton />);

  expect(component).toMatchSnapshot();
});

it('updateCount should increment count prop in state by one (1)', () => {
  let component = shallow(<CounterButton />);

  component.simulate('click');

  expect(component.state().count).toEqual(1);
});
