import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  height: 300px;
  img {
    border-radius: 3px;
    width: 300px;
  }
  h2 {
    font-size: 30px;
    text-transform: uppercase;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: #202020;
      margin-top: 20px;
      text-transform: uppercase;
    }
    ul {
      list-style: none;
      margin: 10px 20px;
      max-width: 300px;
      li {
        line-height: 26px;
      }
    }
  }
`;
