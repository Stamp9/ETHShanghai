import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/features/home/Header';

describe('home/Header', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Header {...props} />
    );

    expect(
      renderedComponent.find('.home-header').length
    ).toBe(1);
  });
});
