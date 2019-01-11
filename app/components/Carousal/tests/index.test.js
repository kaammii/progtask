import React from 'react';
import { shallow } from 'enzyme';

import Carousal from '../index';

describe('<Carousal />', () => {
  it('should render', () => {
    const wrapper = shallow(<Carousal />);
    expect(wrapper);
  });
});
