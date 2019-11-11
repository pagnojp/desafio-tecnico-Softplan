import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Card = styled.div`
  width: 190px;
  background-color: #333;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  img {
    width: 190px;
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
