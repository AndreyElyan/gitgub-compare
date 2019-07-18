import styled from "styled-components";

//div
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
`;

//form
export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 4px;
    border: ${props => (props.withError ? "0.5px solid #F00" : 0)};
  }

  button {
    padding: 0 20px;
    margin-left: 10px;
    height: 55px;
    background: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    &:hover {
      background: #52d89f;
    }
  }
`;
