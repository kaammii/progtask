import React from 'react';
import PropTypes from 'prop-types';
import { Rate, Icon } from 'antd';
import { Link } from 'react-router-dom';

import TopDescr from './styles';

function TopDescription() {
  return (
    <TopDescr>
      <div className="topdescr">
        <Link to="/">Clarion</Link>
        <Rate disabled defaultValue={4} />
        <p className="address">
          Denmarkgatan 12, Stockholm <span>Show on map</span>
        </p>
        <p className="phone">
          <Icon type="phone" />
          <span>07-1234567</span>
        </p>
      </div>
    </TopDescr>
  );
}

export default TopDescription;
