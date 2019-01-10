import React from 'react';
import PropTypes from 'prop-types';
import { Rate, Icon } from 'antd';
import { Link } from 'react-router-dom';

import TopDescr from './styles';

function TopDescription({ details }) {
  return (
    <TopDescr>
      <div className="topdescr">
        <Link to="/">{details.name}</Link>
        <Rate disabled defaultValue={4} />
        <p className="address">
          {details.address.street}, {details.address.city}{' '}
          <span>Show on map</span>
        </p>
        <p className="phone">
          <Icon type="phone" />
          <span>{details.contactInfo.phoneNumber}</span>
        </p>
      </div>
    </TopDescr>
  );
}

TopDescription.propTypes = {
  details: PropTypes.object.isRequired,
};

export default TopDescription;
