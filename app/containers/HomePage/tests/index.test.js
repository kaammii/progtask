import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import DescriptionItem from '../DescriptionItem';
import Carousal from '../../../components/Carousal';
import TopDescription from '../TopDescription';
import MenuItem from '../../../components/MenuItem';
import GuestsCard from '../GuestsCard';
import DrawerModal from '../../../components/DrawerModal';
import Map from '../../../components/Map';

describe('<HomePage />', () => {
  it('should render DescriptionItem', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<DescriptionItem />)).toEqual(true);
  });
  it('should render Carousal', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<Carousal />)).toEqual(true);
  });
  it('should render TopDescription', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<TopDescription />)).toEqual(true);
  });
  it('should render MenuItem', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<MenuItem />)).toEqual(true);
  });
  it('should render GuestsCard', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<GuestsCard />)).toEqual(true);
  });
  it('should render DrawerModal', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<DrawerModal />)).toEqual(true);
  });
  it('should render Map', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<Map />)).toEqual(true);
  });
});
