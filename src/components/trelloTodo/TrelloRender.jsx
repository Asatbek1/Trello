import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleForm } from "../../store/slices/trelloReducer";
import TrelloInTask from "./InTrello/inTrelloIn/trelloInTask";
import InTrelloTodo from "./InTrello/InTrelloTodo";
const TrelloRender = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("render");
  return (
    <ul>
      {todos.map((task) => {
        return (
          <LiCard key={task.id} draggable={true}>
            <SpanTask onClick={() => dispatch(toggleForm(task.id))}>
              {task.title}

              {task.date}
              <Images>
                <img
                  onClick={() => dispatch(deleteTask(task.id))}
                  src="https://cdn3.iconfinder.com/data/icons/feather-5/24/x-256.png"
                  alt="icon"
                />
              </Images>
            </SpanTask>
            {task.isVisible && (
              <InTrelloTodo id={task.id} taskCard={task.taskCard} />
            )}
            <TrelloInTask taskCard={task.taskCard} />
          </LiCard>
        );
      })}
    </ul>
  );
};

export default TrelloRender;

const Images = styled.div`
  & img {
    width: 25px;
  }
`;
const LiCard = styled.li`
  list-style: none;
  background-color: #ebecf0;
  border-radius: 6px;
  cursor: grab;
  color: #273a5a;
  width: 320px;
  float: left;
  margin: 1%;
`;
const SpanTask = styled.p`
  display: flex;
  justify-content: space-around;
  margin: 3%;
`;
