import React from 'react';
import styled from 'styled-components';
import { Rate, Icon, Radio, List, Button, Row, Col, Card, Select } from 'antd';
import { Link } from 'react-router-dom';

import Carousal from '../../components/Carousal';

const Option = Select.Option;

const Content = styled.div`
  margin: 3% 10% 3% 10%;
`;

const TopDescr = styled.div`
  .topdescr > a {
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
  .phone > i {
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

const Tabs = styled.div`
  .tabs {
    font-size: 20px;
    margin-top: 20px;
  }
`;

const MenuPrice = styled.div`
  border-left: 1px solid #ccc;
  height: 100%;
  padding: 20px;
  text-align: center;
`;

const NumOfGuest = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  .selectNumOfGuest {
    width: 100%;
  }
`;

const Side = () => (
  <MenuPrice>
    <div>
      <p>800 PKR</p>
      <p>PER PERSON</p>
    </div>
    <Button type="primary" block>
      Add
    </Button>
  </MenuPrice>
);

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    const listData = [];
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
            <Col span={18}>
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
              <Tabs>
                <Radio.Group value="menu" className="tabs">
                  <Radio.Button value="overview">Overview</Radio.Button>
                  <Radio.Button value="menu">Menu</Radio.Button>
                </Radio.Group>
              </Tabs>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    // eslint-disable-next-line no-console
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[<Button type="primary">View Menu</Button>]}
                    extra={<Side />}
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </Col>
            <Col span={6}>
              <Card>
                <NumOfGuest>
                  <h3>Guests</h3>
                  <Select
                    defaultValue="lucy"
                    size="large"
                    className="selectNumOfGuest"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </NumOfGuest>
              </Card>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default HomePage;
