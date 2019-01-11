import React from 'react';
import { shallow } from 'enzyme';

import DrawerModal from '../index';

describe('<DrawerModal />', () => {
  it('should render', () => {
    const wrapper = shallow(<DrawerModal />);
    expect(wrapper);
  });
});
