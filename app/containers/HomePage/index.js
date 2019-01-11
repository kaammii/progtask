import React from 'react';
import { Radio, Row, Col } from 'antd';

import { Content, Tabs } from './styles';
import DescriptionItem from './DescriptionItem';
import Carousal from '../../components/Carousal';
import TopDescription from './TopDescription';
import MenuItem from '../../components/MenuItem';
import GuestsCard from './GuestsCard';
import DrawerModal from '../../components/DrawerModal';
import Map from '../../components/Map';
import testData from './testData.json';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      tabs: 'overview',
      menuDetail: {},
      showMap: false,
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
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <TopDescription
                details={testData}
                onShowMap={() => this.setState({ showMap: true })}
              />
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
            <Col
              xs={24}
              sm={24}
              md={{ span: 6, offset: 1 }}
              lg={{ span: 6, offset: 1 }}
              xl={{ span: 6, offset: 1 }}
            >
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
          <DrawerModal
            title={testData.name}
            showDetail={this.state.showMap}
            onClose={() => this.setState({ showMap: false })}
          >
            <Map />
          </DrawerModal>
        </Content>
      </div>
    );
  }
}

export default HomePage;
