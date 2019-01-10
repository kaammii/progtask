import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Divider } from 'antd';

const Container = styled.div`
  font-size: 14px;
  line-height: 22px;
  marginbottom: 7px;
  color: rgba(0, 0, 0, 0.65);
  .title {
    margin-right: 8px;
    display: inline-block;
    color: rgba(0, 0, 0, 0.85);
  }
`;

const DescriptionItem = ({ detail }) => (
  <div>
    <h3>Deserts</h3>
    {detail.deserts.map(item => (
      <Container key={item.name}>
        <p className="title">{item.name}:</p>
        {item.desc}
      </Container>
    ))}
    <Divider />
    <Container>
      <h3 className="title">Drinks:</h3>
      {detail.drinks.map(drinks => `${drinks}, `)}
    </Container>
    <Divider />
    <h3>Main Courses</h3>
    {detail.mainCourses.map(item => (
      <Container key={item.name}>
        <p className="title">{item.name}:</p>
        {item.desc}
      </Container>
    ))}
    <Divider />
    <h3>Side Dishes</h3>
    {detail.sideDishes.map(item => (
      <Container key={item.name}>
        <p className="title">{item.name}:</p>
        {item.desc}
      </Container>
    ))}
    <Divider />
    <h3>Starters</h3>
    {detail.starters.map(item => (
      <Container key={item.name}>
        <p className="title">{item.name}:</p>
        {item.desc}
      </Container>
    ))}
  </div>
);

DescriptionItem.propTypes = {
  detail: PropTypes.object,
};

export default DescriptionItem;
