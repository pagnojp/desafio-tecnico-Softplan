import styled from 'styled-components';

export const Card = styled.div`
  background-color: #333;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 310px;
  margin: 10px 10px;
  width: 300px;

  &:hover {
    background-color: #444;
  }
  img {
    border-radius: 3px;
    margin: 10px 10px 0 10px;
    width: 210px;
    height: 200px;
  }
  h2 {
    color: #FFF;
    font-size: 20px;
    padding: 20px;
  }
`;
