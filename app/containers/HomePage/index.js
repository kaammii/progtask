import React from 'react';
import styled from 'styled-components';
import {
  Rate,
  Icon,
  Radio,
  List,
  Button,
  Row,
  Col,
  Card,
  Select,
  DatePicker,
  Drawer,
} from 'antd';
import { Link } from 'react-router-dom';

import DescriptionItem from './DescriptionItem';
import Carousal from '../../components/Carousal';

const { Option } = Select;
const RadioGroup = Radio.Group;

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
    margin-bottom: 20px;
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
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
  .selectNumOfGuest {
    width: 100%;
  }
`;

const ItemTitle = styled.span`
  color: #096dd9;
  font-weight: bold;
  cursor: pointer;
`;

const DateContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0 10px 10px 10px;
  .datePicker {
    width: 100%;
  }
  .lunchDinner {
    margin: 10px 0 0 0;
  }
`;

const Book = styled.div`
  padding: 0 10px 10px 10px;
  .totalPrice {
    margin-top: 15px;
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
  constructor(props) {
    super(props);
    this.state = {
      time: 1,
      showDetail: false,
    };
    this.handleTime = this.handleTime.bind(this);
  }

  handleTime(e) {
    this.setState({
      time: e.target.value,
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
                bordered
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
                    actions={[
                      <Button
                        type="primary"
                        onClick={() => this.setState({ showDetail: true })}
                      >
                        View Menu
                      </Button>,
                    ]}
                    extra={<Side />}
                  >
                    <List.Item.Meta
                      title={<ItemTitle>{item.title}</ItemTitle>}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </Col>
            <Col span={1} />
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
                <DateContainer>
                  <h3>Date</h3>
                  <DatePicker className="datePicker" />
                  <RadioGroup
                    className="lunchDinner"
                    value={this.state.time}
                    onChange={this.handleTime}
                  >
                    <Radio value={1}>Lunch time</Radio>
                    <Radio value={2}>Dinner time</Radio>
                  </RadioGroup>
                </DateContainer>
                <Book>
                  <p className="totalPrice">Total Price: 3000</p>
                  <Button type="primary" block>
                    Book
                  </Button>
                </Book>
              </Card>
            </Col>
          </Row>
          <Drawer
            title="Menu 1 Detail"
            width={720}
            onClose={()=> this.setState({ showDetail: false })}
            visible={this.state.showDetail}
            style={{
              overflow: 'auto',
              height: 'calc(100% - 108px)',
              paddingBottom: '108px',
            }}
          >
            <DescriptionItem
              title="Chickn Curry"
              content="fresh mix vegetable sallad"
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
            </div>
          </Drawer>
        </Content>
      </div>
    );
  }
}

export default HomePage;
