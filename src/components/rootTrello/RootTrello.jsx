import React from "react";
import styled from "styled-components";
import TrelloTodo from "../trelloTodo/TrelloForm";
import TrelloRender from "../trelloTodo/TrelloRender";

const RootTrello = () => {
  return (
    <>
      <RootTrelloStyled>
        <TrelloTodo />
      </RootTrelloStyled>
      <TrelloRender />
    </>
  );
};

export default RootTrello;
const RootTrelloStyled = styled.div`
  text-align: center;
  margin: 3% auto;
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ebecf0;
  border-radius: 10px;
  background: linear-gradient(290deg, #415464, #c8cecb);
`;
