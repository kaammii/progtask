import React from 'react';
import { Radio, Row, Col } from 'antd';

import { Content, Tabs } from './styles';
import DescriptionItem from './DescriptionItem';
import Carousal from '../../components/Carousal';
import TopDescription from './TopDescription';
import MenuItem from '../../components/MenuItem';
import GuestsCard from './GuestsCard';
import DrawerModal from '../../components/DrawerModal';


/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      tabs: 'overview',
    };
    this.handleTabs = this.handleTabs.bind(this);
  }

  handleTabs(e) {
    this.setState({
      tabs: e.target.value,
    });
  }

  render() {
    const listData = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `Menu ${i}`,
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: '2Starters + 3Main Courses + 2Deserts  + 3Drinks + 1SideDish',
      });
    }

    return (
      <div>
        <Carousal />
        <Content>
          <Row>
            <Col span={17}>
              <TopDescription />
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
                listData={listData}
                onViewMenu={() => this.setState({ showDetail: true })}
              />
            </Col>
            <Col span={1} />
            <Col span={6}>
              <GuestsCard />
            </Col>
          </Row>
          <DrawerModal
            showDetail={this.state.showDetail}
            onClose={this.setState({ showDetail: false })}
          >
            <DescriptionItem
              title="Chickn Curry"
              content="fresh mix vegetable sallad"
            />
          </DrawerModal>
        </Content>
      </div>
    );
  }
}

export default HomePage;
