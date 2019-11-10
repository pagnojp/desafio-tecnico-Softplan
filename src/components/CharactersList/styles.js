import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Card = styled.div`
  width: 300px;
  background-color: #333;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  header {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    button {
      background: none;
      border: 0;
    }
  }
  img {
    width: 64px;
    padding-top: 20px;
  }
  strong {
    font-size: 24px;
    margin-top: 10px;
  }
  small {
    font-size: 14px;
    color: #666666;
  }
`;
