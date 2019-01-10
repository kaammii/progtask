import React from 'react';
import { Radio, Row, Col } from 'antd';

import { Content, Tabs } from './styles';
import DescriptionItem from './DescriptionItem';
import Carousal from '../../components/Carousal';
import TopDescription from './TopDescription';
import MenuItem from '../../components/MenuItem';
import GuestsCard from './GuestsCard';
import DrawerModal from '../../components/DrawerModal';
import testData from './testData.json';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      tabs: 'overview',
      menuDetail: {},
    };
    this.handleTabs = this.handleTabs.bind(this);
  }

  handleTabs(e) {
    this.setState({
      tabs: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Carousal />
        <Content>
          <Row>
            <Col span={17}>
              <TopDescription details={testData} />
              <Tabs>
                <Radio.Group
                  value={this.state.tabs}
                  className="tabs"
                  onChange={this.handleTabs}
                >
                  <Radio.Button value="overview">Overview</Radio.Button>
                  <Radio.Button value="menu">Menu</Radio.Button>
                </Radio.Group>
              </Tabs>
              <MenuItem
                listData={testData.details.menus}
                onViewMenu={detail =>
                  this.setState({ showDetail: true, menuDetail: detail })
                }
              />
            </Col>
            <Col span={1} />
            <Col span={6}>
              <GuestsCard />
            </Col>
          </Row>
          <DrawerModal
            title={this.state.menuDetail.name || ''}
            showDetail={this.state.showDetail}
            onClose={() => this.setState({ showDetail: false })}
          >
            <DescriptionItem detail={this.state.menuDetail} />
          </DrawerModal>
        </Content>
      </div>
    );
  }
}

export default HomePage;
