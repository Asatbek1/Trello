import React, { useState } from "react";
import styled from "styled-components";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { setUser } from "store/slices/userSlice";
const Form = ({ title, handleClick }) => {
  console.log(title);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <FormValidetion>
      <Trello>
        {" "}
        <h1>Trello</h1>
        <h3>Введите данные</h3>
      </Trello>

      <FormBlock>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => handleClick(email, password)}>{title}</button>
      </FormBlock>
    </FormValidetion>
  );
};
export default Form;

const FormValidetion = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

`;
const Trello =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
border-radius: 10px;
h1{
  font-weight: 800;
  color: blue;
}
`
const FormBlock = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 20px -2px rgba(94, 110, 108, 0.6);
  border-radius: 10px;
  padding: 40px 100px 50px 100px;
  background-color: #fafbfb;
  input {
    margin: 20px;
    padding: 10px 10px;
    border-radius: 8px;
    width: 300px;
    border: 2px solid #3a73bf;
    box-shadow: 3px 3px 5px -2px #5c7da8;
    font-size: 14px;
    font-weight: 600;
  }

  button {
    padding: 8px;
    border: 1px solid gray;
    background-color: #9f9b98;
    border-radius: 5px;
    font: inherit;
    cursor: pointer;
    :focus {
      outline: 2px solid gray;
      font-weight: bold;
      color: white;
    }
    :hover {
      background-color: #9fcfc5;
      box-shadow: 3px 3px 5px #6baa9d;
    }
  }
  h3 {
    padding-bottom: 20px;
  }
`;
