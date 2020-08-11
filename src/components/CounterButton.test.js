import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('expects to render the CounterButton component', () => {
  let color = 'red';
  let component = shallow(<CounterButton color={color} />);

  expect(component).toMatchSnapshot();
});

describe('clicking', () => {
  it('should increment count prop in state by one (1)', () => {
    let color = 'red';
    let component = shallow(<CounterButton color={color} />);

    // Below, we're grabbing the button in two (2) ways. One, with the id, and one
    // without.
    component.find('[id="counter"]').simulate('click');
    component.simulate('click');

    expect(component.state().count).toEqual(2);
    expect(component.props().color).toEqual('red');
  });
});
