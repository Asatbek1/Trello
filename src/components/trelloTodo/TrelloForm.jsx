import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../../store/slices/trelloReducer";

const TrelloTodo = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const dispatch = useDispatch();
  console.log("render");
  const addTask = () => {
    if (taskDate && taskTitle) {
      const newItem = {
        title: taskTitle,
        date: taskDate,
        id: Date.now(),
        isVisible: false,
        taskCard: [],
      };
      dispatch(addtask(newItem));
      setTaskDate("");
      setTaskTitle("");
    } else {
    }
  };

  return (
    <TrelloForm>
      <InputTitle
        maxLength="20"
        placeholder="     Squeak card name"
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <InputDate
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <ButtonA onClick={addTask}>ADD CARD</ButtonA>
    </TrelloForm>
  );
};

export default TrelloTodo;

const TrelloForm = styled.div`
  display: flex;
  align-items: center;
`;
const InputTitle = styled.input`
  border: none;
  height: 29px;
  border-radius: 5px 0 0 5px;
`;
const InputDate = styled.input`
  border: none;
  height: 31px;
`;
const ButtonA = styled.button`
  border: none;
  border-radius: 0 5px 5px 0;
  width: 130px;
  height: 30px;
  word-wrap: break-word;
`;
