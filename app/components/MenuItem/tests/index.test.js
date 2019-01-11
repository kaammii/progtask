import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from '../index';

describe('<MenuItem />', () => {
  it('should render', () => {
    const wrapper = shallow(<MenuItem />);
    expect(wrapper);
  });
});
