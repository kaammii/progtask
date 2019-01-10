import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'antd';
import { MenuPrice, ItemTitle } from './styles';

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

function MenuItem({ listData, onViewMenu }) {
  return (
    <List
      itemLayout="vertical"
      bordered
      pagination={{
        pageSize: 3,
      }}
      dataSource={listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <Button type="primary" onClick={onViewMenu}>
              View Menu
            </Button>,
          ]}
          extra={<Side />}
        >
          <List.Item.Meta title={<ItemTitle>{item.title}</ItemTitle>} />
          {item.content}
        </List.Item>
      )}
    />
  );
}

MenuItem.propTypes = {
  listData: PropTypes.array,
  onViewMenu: PropTypes.func,
};

export default MenuItem;
