import styled from 'styled-components';

const NumOfGuest = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
  .selectNumOfGuest {
    width: 100%;
  }
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

export { NumOfGuest, DateContainer, Book };
