import React from 'react';
import { shallow } from 'enzyme';
import { Page1 } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Page1 />);
  expect(renderedComponent.find('.home-page-1').length).toBe(1);
});
