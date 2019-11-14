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
    font-size: 26px;
    padding: 10px 20px;
    text-transform: uppercase;
  }
  a {
    background-color: #DDD;
    border-radius: 3px;
    color: #EC1D24;
    font-size: 18px;
    margin-left: 10px;
    padding: 0 10px;
    text-decoration: none;
    &:hover {
      background-color: #CCC;
    }
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
    .backToHome {
      color: #202020;
      margin-top: 20px;
    }
  }
`;
