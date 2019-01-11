import React from 'react';
import { Card, DatePicker, Radio, Button, Select } from 'antd';

import { NumOfGuest, DateContainer, Book } from './styles';

const { Option } = Select;
const RadioGroup = Radio.Group;

/* eslint-disable react/prefer-stateless-function */
class GuestsCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      numOfGuest: 250,
      eatingTime: 1,
    };
    this.handleGuests = this.handleGuests.bind(this);
    this.handleEatingTime = this.handleEatingTime.bind(this);
  }

  handleGuests(numOfGuest) {
    this.setState({
      numOfGuest,
    });
  }

  handleEatingTime(e) {
    this.setState({
      eatingTime: e.target.value,
    });
  }

  render() {
    const { numOfGuest, eatingTime } = this.state;
    const eatingPrice = eatingTime === 1 ? 200 : 400;
    const totalPrice = eatingPrice * numOfGuest;
    return (
      <Card>
        <NumOfGuest>
          <h3>Guests</h3>
          <Select
            defaultValue={numOfGuest}
            onChange={this.handleGuests}
            size="large"
            className="selectNumOfGuest"
          >
            <Option value="250">200-250</Option>
            <Option value="300">250-300</Option>
            <Option value="350">300-350</Option>
          </Select>
        </NumOfGuest>
        <DateContainer>
          <h3>Date</h3>
          <DatePicker className="datePicker" />
          <RadioGroup
            className="lunchDinner"
            value={eatingTime}
            onChange={this.handleEatingTime}
          >
            <Radio value={1}>Lunch time</Radio>
            <Radio value={2}>Dinner time</Radio>
          </RadioGroup>
        </DateContainer>
        <Book>
          <p className="totalPrice">Total Price: {totalPrice}</p>
          <Button type="primary" block>
            Book
          </Button>
        </Book>
      </Card>
    );
  }
}

export default GuestsCard;
