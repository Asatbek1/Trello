import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTaskInTrello } from "../../../store/slices/trelloReducer";

const InTrelloTodo = (props) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const onSubmitTask = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const newTask = {
        task: inputValue,
        id: Date.now(),
        complete: false,
        idCard: props.id,
      };
      dispatch(addTaskInTrello(newTask));
      setInputValue("");
    }
  };
  return (
    <>
      <FormAnimation onSubmit={onSubmitTask}>
        <input
          type="text"
          value={inputValue}
          placeholder="write tasks . . ."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">ADD </button>
      </FormAnimation>
    </>
  );
};

export default InTrelloTodo;

const FormAnimation = styled.form`
  border-radius: 5px;

  display: flex;
  justify-content: center;
  & input {
    width: 70%;
    border: none;
    height: 35px;
    background-color: #d5cff1;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    padding-left: 10px;
  }

  & button {
    width: 25%;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #d5cff1;
  }
`;
