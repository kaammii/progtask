import React from 'react';
import { Card, DatePicker, Radio, Button, Select } from 'antd';

import { NumOfGuest, DateContainer, Book } from './styles';

const { Option } = Select;
const RadioGroup = Radio.Group;

function GuestsCard() {
  return (
    <Card>
      <NumOfGuest>
        <h3>Guests</h3>
        <Select
          defaultValue="200-250"
          size="large"
          className="selectNumOfGuest"
        >
          <Option value="200-250">200-250</Option>
          <Option value="250-300">250-300</Option>
          <Option value="300-350">300-350</Option>
        </Select>
      </NumOfGuest>
      <DateContainer>
        <h3>Date</h3>
        <DatePicker className="datePicker" />
        <RadioGroup className="lunchDinner" value={1}>
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
  );
}

export default GuestsCard;
