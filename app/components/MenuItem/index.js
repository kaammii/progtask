import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'antd';
import { MenuPrice, ItemTitle } from './styles';

const Side = ({ price }) => (
  <MenuPrice>
    <div>
      <p>{price} PKR</p>
      <p>PER PERSON</p>
    </div>
    <Button type="primary" block>
      Add
    </Button>
  </MenuPrice>
);

Side.propTypes = {
  price: PropTypes.number.isRequired,
};

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
          key={item.id}
          actions={[
            <Button type="primary" onClick={() => onViewMenu(item)}>
              View Menu
            </Button>,
          ]}
          extra={<Side price={item.basePrice} />}
        >
          <List.Item.Meta title={<ItemTitle>{item.name}</ItemTitle>} />
          {item.deserts.length}
          Deserts + {item.drinks.length}
          Drinks + {item.mainCourses.length}
          Main Courses + {item.sideDishes.length}
          Side Dishes + {item.starters.length}
          Starters
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
