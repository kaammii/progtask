import React from 'react';
import { shallow } from 'enzyme';

import Map from '../index';

describe('<Map />', () => {
  it('should render', () => {
    const wrapper = shallow(<Map />);
    expect(wrapper);
  });
});
