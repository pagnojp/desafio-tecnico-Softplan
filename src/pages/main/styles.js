import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

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

export const CardLocal = styled.div`
  background-color: #EC1D24;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 310px;
  margin: 10px 10px;
  width: 300px;

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

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  padding: 0 10px;
  input {
    flex: 1;
    height: 50px;
    padding: 0 20px;
    background-color: #ffffff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${(props) => (props.withError ? '2px solid #EC1D24' : '1px solid #999')};
  }
  button {
    height: 50px;
    margin-left: 10px;
    background-color: #333;
    color: #ffffff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    width: 100px;
    &:hover {
      background-color: #EC1D24;
      cursor: pointer;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  a {
    text-decoration: none;
  }
`;
