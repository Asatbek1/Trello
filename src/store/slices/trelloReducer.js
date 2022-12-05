import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const trelloReduce = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addtask(state, action) {
      state.todos.push(action.payload);
    },
    deleteTask(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleForm(state, action) {
      state.todos.map((todo) =>
        todo.id === action.payload ? (todo.isVisible = !todo.isVisible) : todo
      );
    },
    addTaskInTrello(state, action) {
      state.todos.map((item) =>
        item.id === action.payload.idCard
          ? item.taskCard.push(action.payload)
          : item
      );
    },

    deleteInTrello(state, { payload }) {
      const currentTodo = state.todos.findIndex(
        (todo) => todo.id === payload.idCard
      );
      state.todos[currentTodo].taskCard = state.todos[
        currentTodo
      ].taskCard.filter((task) => task.id !== payload.id);
    },
  },
});
export const {
  addtask,
  deleteTask,
  toggleForm,
  addTaskInTrello,
  deleteInTrello,
} = trelloReduce.actions;
export default trelloReduce;
