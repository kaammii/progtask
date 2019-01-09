import React from 'react';
import styled from 'styled-components';
import { Rate, Icon, Radio } from 'antd';
import { Link } from 'react-router-dom';

import Carousal from '../../components/Carousal';

const Content = styled.div`
  margin: 3% 10% 3% 10%;
`;

const TopDescr = styled.div`
  .topdescr>a {
    font-size: 30px;
    text-decoration: none;
  }
  .ant-rate {
    margin-left: 20px;
  }
  .address span {
    color: #1890ff;
    font-size: 16px;
    cursor: pointer;
  }
  .phone>i {
    font-size: 25px;
  }
  .phone span {
    font-size: 16px;
    margin-left: 5px;
  }
  .tabs {
    font-size: 20px;
    margin-top: 20px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Carousal />
        <Content>
          <TopDescr>
            <div className="topdescr">
              <Link to="/">Clarion</Link>
              <Rate disabled defaultValue={4} />
              <p className="address" >
                Denmarkgatan 12, Stockholm <span>Show on map</span>
              </p>
              <p className="phone" >
                <Icon type="phone" />
                <span>321321321</span>
              </p>
            </div>
          </TopDescr>
          <Radio.Group value="menu" className="tabs" >
            <Radio.Button value="overview">Overview</Radio.Button>
            <Radio.Button value="menu">Menu</Radio.Button>
          </Radio.Group>
        </Content>
      </div>
    )
  }
}

export default HomePage;
