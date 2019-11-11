import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  a {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  background-color: #333;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  height: 330px;
  margin: 10px 10px;
  width: 210px;

  &:hover {
    background-color: #444;
  }
  img {
    border-radius: 3px;
    margin: 10px 10px 0 10px;
    width: 190px;

  }
  h2 {
    color: #FFF;
    font-size: 20px;
    padding: 20px;
  }
`;
