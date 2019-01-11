import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import Carousal from '../../../components/Carousal';
import GuestsCard from '../GuestsCard';
import Map from '../../../components/Map';

describe('<HomePage />', () => {
  it('should render Carousal', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<Carousal />)).toEqual(true);
  });
  it('should render GuestsCard', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<GuestsCard />)).toEqual(true);
  });
  it('should render Map', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<Map />)).toEqual(true);
  });
});
